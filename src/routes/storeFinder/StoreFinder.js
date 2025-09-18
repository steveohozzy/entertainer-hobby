"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { Search, MapPin, Phone, Clock, Navigation, ChevronDown } from "lucide-react"
import entertainerStores from "../../data/stores"

import Button from "../../components/button/Button"

// Mock function to simulate geocoding API
const mockGeocode = async (query) => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  // Mock coordinates for common UK locations
  const mockLocations = {
    london: { lat: 51.5074, lng: -0.1278 },
    birmingham: { lat: 52.4862, lng: -1.8904 },
    manchester: { lat: 53.4808, lng: -2.2426 },
    leeds: { lat: 53.8008, lng: -1.5491 },
    glasgow: { lat: 55.8642, lng: -4.2518 },
    cardiff: { lat: 51.4816, lng: -3.1791 },
    newcastle: { lat: 54.9783, lng: -1.6178 },
    bristol: { lat: 51.4545, lng: -2.5879 },
    liverpool: { lat: 53.4084, lng: -2.9916 },
    sheffield: { lat: 53.3811, lng: -1.4701 },
    nottingham: { lat: 52.9548, lng: -1.1581 },
    edinburgh: { lat: 55.9533, lng: -3.1883 },
    brighton: { lat: 50.8225, lng: -0.1372 },
    reading: { lat: 51.4543, lng: -0.9781 },
    // Postcodes
    "w1d 1nn": { lat: 51.5154, lng: -0.1423 },
    "e20 1ej": { lat: 51.5434, lng: -0.0079 },
    "b5 4bu": { lat: 52.4777, lng: -1.8938 },
    "m4 3aq": { lat: 53.4827, lng: -2.2426 },
    "ls1 5ar": { lat: 53.7977, lng: -1.5437 },
  }

  const normalizedQuery = query.toLowerCase().trim()
  const location = mockLocations[normalizedQuery]

  if (location) {
    return location
  }

  // If not found, return London as default
  return mockLocations.london
}
// Calculate distance between two coordinates (Haversine formula)
const calculateDistance = (lat1, lng1, lat2, lng2) => {
  const R = 3959 // Earth's radius in miles
  const dLat = ((lat2 - lat1) * Math.PI) / 180
  const dLng = ((lng2 - lng1) * Math.PI) / 180
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * Math.sin(dLng / 2) * Math.sin(dLng / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return R * c
}

export default function StoreFinderPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchLocation, setSearchLocation] = useState(null)
  const [filteredStores, setFilteredStores] = useState(entertainerStores)
  const [isLoading, setIsLoading] = useState(false)
  const [selectedStore, setSelectedStore] = useState(null)
  const [showFilters, setShowFilters] = useState(false)
  const [selectedServices, setSelectedServices] = useState([])
  const [selectedStoreTypes, setSelectedStoreTypes] = useState([])
  const [maxDistance, setMaxDistance] = useState(25)
  const [sortBy, setSortBy] = useState("distance")
  const [viewMode, setViewMode] = useState("both") // 'map', 'list', 'both'
  const [mapLoaded, setMapLoaded] = useState(false)
  const mapRef = useRef(null)
  const mapInstanceRef = useRef(null)
  const markersRef = useRef([])

  // Get current day for opening hours display
  const getCurrentDay = () => {
    const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
    return days[new Date().getDay()]
  }

  const currentDay = getCurrentDay()

  // Check if store is currently open
  const isStoreOpen = (store) => {
    const now = new Date()
    const currentTime = now.getHours() * 100 + now.getMinutes()
    const todayHours = store.openingHours[currentDay]

    if (!todayHours || todayHours === "Closed") return false

    const [openTime, closeTime] = todayHours.split(" - ")
    const [openHour, openMin] = openTime.split(":").map(Number)
    const [closeHour, closeMin] = closeTime.split(":").map(Number)

    const openTimeNum = openHour * 100 + openMin
    const closeTimeNum = closeHour * 100 + closeMin

    return currentTime >= openTimeNum && currentTime <= closeTimeNum
  }

  // Update map markers when filtered stores change
  const updateMapMarkers = useCallback((L, stores) => {
    if (!mapInstanceRef.current || !L || !mapLoaded) return

    const LeafletLib = L.default || L

    try {
      // Clear existing markers
      markersRef.current.forEach((marker) => {
        mapInstanceRef.current.removeLayer(marker)
      })
      markersRef.current = []

      // Add new markers
      stores.forEach((store) => {
        const icon = LeafletLib.divIcon({
          className: "custom-marker",
          html: `<div class="w-8 h-8 rounded-full border-2 border-white shadow-lg flex items-center justify-center text-white text-xs font-bold ${
            store.storeType === "flagship"
              ? "bg-purple-600"
              : store.storeType === "large"
                ? "bg-blue-600"
                : "bg-green-600"
          }">${stores.indexOf(store) + 1}</div>`,
          iconSize: [32, 32],
          iconAnchor: [16, 16],
        })

        const marker = LeafletLib.marker([store.coordinates.lat, store.coordinates.lng], { icon })
          .addTo(mapInstanceRef.current)
          .bindPopup(`
          <div class="p-2">
            <h4 class="font-bold text-sm mb-1 text-brandBlue">${store.name}</h4>
            <p class="text-xs text-textBlue mb-1">${store.address}</p>
            <p class="text-xs text-brandBlue font-bold">
              ${store.distance ? `${store.distance.toFixed(1)} miles away` : ""}
            </p>
            <div class="mt-2">
              <button onclick="window.selectStore(${store.id})" class="text-xs bg-brandGreen text-white px-2 shadow-sm transition-all py-1 rounded-lg hover:bg-brandLightGreen">
                View Details
              </button>
            </div>
          </div>
        `)

        markersRef.current.push(marker)
      })

      // Add search location marker if available
      if (searchLocation) {
        const searchIcon = LeafletLib.divIcon({
          className: "search-marker",
          html: '<div class="w-6 h-6 bg-red-500 rounded-full border-2 border-white shadow-lg flex items-center justify-center"><svg class="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg></div>',
          iconSize: [24, 24],
          iconAnchor: [12, 12],
        })

        const searchMarker = LeafletLib.marker([searchLocation.lat, searchLocation.lng], { icon: searchIcon })
          .addTo(mapInstanceRef.current)
          .bindPopup('<div class="p-2"><strong>Your Location</strong></div>')

        markersRef.current.push(searchMarker)
      }

      // Fit map to show all markers
      if (markersRef.current.length > 0) {
        const group = new LeafletLib.featureGroup(markersRef.current)
        mapInstanceRef.current.fitBounds(group.getBounds().pad(0.1))
      }
    } catch (error) {
      console.error("Error updating map markers:", error)
    }
  }, [mapLoaded, searchLocation])

  // Initialize Leaflet map with better error handling
  useEffect(() => {
    let mounted = true
    let retryCount = 0
    const maxRetries = 10

    const initializeMap = async () => {
      if (!mounted || mapInstanceRef.current) return

      try {
        // Wait for the component to be fully mounted and visible
        await new Promise((resolve) => setTimeout(resolve, 300))

        // Check if we're still mounted and the ref exists
        if (!mounted || !mapRef.current) {
          console.log("Component unmounted or ref not available")
          return
        }

        // Check if the map container is visible and has dimensions
        const container = mapRef.current
        const rect = container.getBoundingClientRect()

        if (rect.width === 0 || rect.height === 0) {
          console.log(`Map container has no dimensions (${rect.width}x${rect.height}), retrying...`)
          if (retryCount < maxRetries) {
            retryCount++
            setTimeout(initializeMap, 500)
            return
          } else {
            console.error("Max retries reached, map container still has no dimensions")
            return
          }
        }

        console.log(`Map container dimensions: ${rect.width}x${rect.height}`)

        // Dynamically import Leaflet
        const L = await import("leaflet")
        const LeafletLib = L.default || L

        // Load Leaflet CSS if not already present
        if (!document.querySelector('link[href*="leaflet.css"]')) {
          const link = document.createElement("link")
          link.rel = "stylesheet"
          link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          document.head.appendChild(link)

          // Wait for CSS to load
          await new Promise((resolve) => {
            link.onload = resolve
            setTimeout(resolve, 2000) // Fallback timeout
          })
        }

        // Double-check the container is still available
        if (!mounted || !mapRef.current) {
          console.log("Container disappeared during initialization")
          return
        }

        // Initialize the map
        console.log("Initializing Leaflet map...")
        mapInstanceRef.current = LeafletLib.map(mapRef.current, {
          center: [54.5, -2.5], // Center on UK
          zoom: 6,
          zoomControl: true,
          scrollWheelZoom: true,
        })

        // Add OpenStreetMap tiles
        LeafletLib.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: "© OpenStreetMap contributors",
          maxZoom: 19,
        }).addTo(mapInstanceRef.current)

        // Set map as loaded
        setMapLoaded(true)

        // Add initial markers
        updateMapMarkers(LeafletLib, filteredStores)

        console.log("Map initialized successfully")
      } catch (error) {
        console.error("Error initializing map:", error)
        if (retryCount < maxRetries) {
          retryCount++
          console.log(`Retrying map initialization (${retryCount}/${maxRetries})...`)
          setTimeout(initializeMap, 1000)
        }
      }
    }

    // Only initialize if we're in the browser and the map view is visible
    if (typeof window !== "undefined" && (viewMode === "both" || viewMode === "map")) {
      initializeMap()
    }

    return () => {
      mounted = false
      if (mapInstanceRef.current) {
        try {
          mapInstanceRef.current.remove()
          mapInstanceRef.current = null
          setMapLoaded(false)
        } catch (error) {
          console.error("Error cleaning up map:", error)
        }
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredStores, viewMode]) // Re-initialize when view mode changes

  // Update markers when filtered stores change
  useEffect(() => {
    if (typeof window !== "undefined" && mapInstanceRef.current && mapLoaded) {
      import("leaflet")
        .then((L) => {
          updateMapMarkers(L, filteredStores)
        })
        .catch((error) => {
          console.error("Error updating map markers:", error)
        })
    }
  }, [filteredStores, searchLocation, mapLoaded, updateMapMarkers])

  // Expose store selection function globally for map popups
  useEffect(() => {
    window.selectStore = (storeId) => {
      const store = filteredStores.find((s) => s.id === storeId)
      if (store) {
        setSelectedStore(store)
        // Scroll to store in list
        const storeElement = document.getElementById(`store-${storeId}`)
        if (storeElement) {
          storeElement.scrollIntoView({ behavior: "smooth", block: "center" })
        }
      }
    }

    return () => {
      delete window.selectStore
    }
  }, [filteredStores])

  // Apply filters function
  const applyFilters = useCallback((stores, location) => {
    let filtered = stores

    // Apply distance filter if we have a search location
    if (location) {
      filtered = stores
        .map((store) => ({
          ...store,
          distance: calculateDistance(location.lat, location.lng, store.coordinates.lat, store.coordinates.lng),
        }))
        .filter((store) => store.distance <= maxDistance)
    }

    // Apply service filters
    if (selectedServices.length > 0) {
      filtered = filtered.filter((store) => selectedServices.every((service) => store.services.includes(service)))
    }

    // Apply store type filters
    if (selectedStoreTypes.length > 0) {
      filtered = filtered.filter((store) => selectedStoreTypes.includes(store.storeType))
    }

    // Sort stores
    if (sortBy === "distance" && location) {
      filtered.sort((a, b) => a.distance - b.distance)
    } else if (sortBy === "name") {
      filtered.sort((a, b) => a.name.localeCompare(b.name))
    }

    return filtered
  }, [maxDistance, selectedServices, selectedStoreTypes, sortBy])

  // Handle search
  const handleSearch = async (e) => {
    e.preventDefault()
    if (!searchQuery.trim()) return

    setIsLoading(true)
    try {
      const location = await mockGeocode(searchQuery)
      setSearchLocation(location)

      const filtered = applyFilters(entertainerStores, location)
      setFilteredStores(filtered)
    } catch (error) {
      console.error("Search error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  // Handle filter changes
  useEffect(() => {
    const filtered = applyFilters(entertainerStores, searchLocation)
    setFilteredStores(filtered)
  }, [selectedServices, selectedStoreTypes, maxDistance, sortBy, searchLocation, applyFilters])

  // Toggle service filter
  const toggleService = (service) => {
    setSelectedServices((prev) => (prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]))
  }

  // Toggle store type filter
  const toggleStoreType = (type) => {
    setSelectedStoreTypes((prev) => (prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]))
  }

  // Get unique services for filter options
  const allServices = [...new Set(entertainerStores.flatMap((store) => store.services))]
  const allStoreTypes = [...new Set(entertainerStores.map((store) => store.storeType))]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-brandBlue mb-4">
          Find Your Local Store
        </h1>
        <p className="text-textBlue text-center">
          Discover The Entertainer stores near you. Search by postcode or town
          to find opening hours, services, and directions.
        </p>
      </div>

      {/* Search Bar */}
      <div className="max-w-2xl mx-auto mb-8">
        <form onSubmit={handleSearch} className="relative">
          <div className="flex gap-2">
            <div className="flex-1 relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brandBlue opacity-50 h-5 w-5" />
              <input
                type="text"
                placeholder="Enter postcode or town (e.g., 'London', 'M4 3AQ')"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 w-full outline-none rounded-xl border-[2px] border-brandLightBlue shadow-sm text-brandBlue placeholder:text-textBlue"
              />
            </div>
            <button
              id="submit"
              type="submit"
              disabled={isLoading}
              className="shadow-md hover:shadow-lg group inline-flex items-center justify-center font-bold text-xs lg:text-sm rounded-[30px] bg-brandGreen text-white py-2 px-4 lg:px-8 transition-all hover:bg-brandLightGreen hover:scale-105"
            >
              {isLoading ? (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              ) : (
                <>
                  <Search className="h-5 w-5 mr-2" />
                  Search
                </>
              )}
            </button>
            {(searchQuery || searchLocation) && (
                <button
                  className="shadow-md hover:shadow-lg group inline-flex items-center justify-center font-bold text-xs lg:text-sm rounded-[30px] bg-gray-600 text-white py-2 px-6 lg:px-10 transition-all hover:bg-gray-400 hover:scale-105"
                  onClick={() => {
                    setSearchQuery("")
                    setSearchLocation(null)
                    setFilteredStores(entertainerStores)
                  }}
                >
                  Clear
                </button>
              )}
          </div>
        </form>
      </div>

      {/* Filters and View Controls */}
      <div className="flex flex-wrap w-full items-stretch gap-2 w-full mb-6">
        <div className="w-full md:w-auto bg-brandBlue grow text-white flex flex-wrap items-center justify-around gap-4 px-4 py-2 rounded-full lg:rounded-tr-none lg:rounded-br-none">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md bg-white text-sm focus:outline-none text-brandBlue"
          >
            <option value="distance">Sort by Distance</option>
            <option value="name">Sort by Name</option>
          </select>

          <div className="flex items-center gap-2">
            <span className="text-sm text-white">Within:</span>
            <select
              value={maxDistance}
              onChange={(e) => setMaxDistance(Number(e.target.value))}
              className="px-3 py-2 border border-gray-300 rounded-md bg-white text-sm focus:outline-none text-brandBlue"
            >
              <option value={5}>5 miles</option>
              <option value={10}>10 miles</option>
              <option value={25}>25 miles</option>
              <option value={50}>50 miles</option>
              <option value={100}>100 miles</option>
            </select>
          </div>
        </div>

        <div className="flex w-full grow md:w-auto items-center px-6 justify-center text-white bg-brandBlue rounded-full lg:rounded-none">
          <button
            name="Show filters"
            class="grow relative z-[2] inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm py-4 h-full w-full px-4 transition-all group bg-brandBlue text-white rounded-full lg:rounded-none"
            onClick={() => setShowFilters(!showFilters)}
          >
            <span class="transition-all group-hover:scale-110">Filter</span>
            <span class="w-4 h-4 text-white transition-all group-hover:rotate-[20deg]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 512 512"
              >
                <path d="M0 416c0 17.7 14.3 32 32 32l54.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 448c17.7 0 32-14.3 32-32s-14.3-32-32-32l-246.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 384c-17.7 0-32 14.3-32 32zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM320 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32-80c-32.8 0-61 19.7-73.3 48L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l246.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48l54.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-54.7 0c-12.3-28.3-40.5-48-73.3-48zM192 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm73.3-64C253 35.7 224.8 16 192 16s-61 19.7-73.3 48L32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l86.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 128c17.7 0 32-14.3 32-32s-14.3-32-32-32L265.3 64z"></path>
              </svg>
            </span>
          </button>
        </div>

        <div className="flex grow py-2 items-center bg-brandBlue rounded-full lg:rounded-tl-none lg:rounded-bl-none text-white items-center justify-center gap-4">
          <span className="text-sm">View:</span>
          <div className="flex border border-gray-300 rounded-md overflow-hidden">
            <button
              onClick={() => setViewMode("both")}
              className={`px-3 py-2 text-sm ${
                viewMode === "both"
                  ? "bg-brandGreen text-white"
                  : "bg-white text-brandBlue hover:bg-gray-50"
              }`}
            >
              Both
            </button>
            <button
              onClick={() => setViewMode("map")}
              className={`px-3 py-2 text-sm border-l ${
                viewMode === "map"
                  ? "bg-brandGreen text-white"
                  : "bg-white text-brandBlue hover:bg-gray-50"
              }`}
            >
              Map
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`px-3 py-2 text-sm border-l ${
                viewMode === "list"
                  ? "bg-brandGreen text-white"
                  : "bg-white text-brandBlue hover:bg-gray-50"
              }`}
            >
              List
            </button>
          </div>
        </div>
      </div>

      {/* Filters Panel */}
      {showFilters && (
        <div className="mb-6">
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Services Filter */}
              <div>
                <h3 className="font-bold text-brandBlue mb-3">Services</h3>
                <div className="flex flex-wrap gap-2">
                  {allServices.map((service) => (
                    <button
                      key={service}
                      className={`${selectedServices.includes(service)
                          ? "bg-brandNeonBlue"
                          : "bg-brandBlue"
                      } text-white px-4 py-2 rounded-full shadow-sm hover:scale-105 hover:bg-textBlue hover:shadow-lg  transition-all`}
                      onClick={() => toggleService(service)}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>

              {/* Store Type Filter */}
              <div>
                <h3 className="font-bold text-brandBlue mb-3">Store Size</h3>
                <div className="flex flex-wrap gap-2">
                  {allStoreTypes.map((type) => (
                    <button
                      key={type}
                      className={`${selectedStoreTypes.includes(type)
                          ? "bg-brandNeonBlue "
                          : "bg-textBlue"
                      } text-white px-4 py-2 rounded-full shadow-sm hover:scale-105 hover:bg-brandBlue hover:shadow-lg  transition-all`}
                      onClick={() => toggleStoreType(type)}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {(selectedServices.length > 0 || selectedStoreTypes.length > 0) && (
              <div className="mt-4 pt-4 border-t">
                <button
                  onClick={() => {
                    setSelectedServices([]);
                    setSelectedStoreTypes([]);
                  }}
                  className="shadow-md hover:shadow-lg group inline-flex items-center justify-center font-bold text-xs lg:text-sm rounded-[30px] bg-brandGreen text-white py-2 px-4 lg:px-8 transition-all hover:bg-brandLightGreen hover:scale-105"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Results Summary */}
      {searchLocation && (
        <div className="mb-6 text-center">
          <p className="text-textBlue">
            Found{" "}
            <span className="font-semibold text-brandBlue">
              {filteredStores.length}
            </span>{" "}
            stores
            {searchQuery && (
              <>
                {" "}
                near <span className="font-semibold text-brandBlue">{searchQuery}</span>
              </>
            )}
          </p>
        </div>
      )}

      {/* Main Content */}
      <div className="grid lg:grid-cols-2 gap-6 items-start">
        {/* Map */}
        {(viewMode === "both" || viewMode === "map") && (
          <div className={`${viewMode === "map" ? "lg:col-span-2" : ""} shadow-lg`}>
            <div className="h-96 lg:h-[600px]">
              <div className="p-0 h-full">
                <div ref={mapRef} className="w-full h-full rounded-lg z-10"></div>
              </div>
            </div>
          </div>
        )}

        {/* Store List */}
        {(viewMode === "both" || viewMode === "list") && (
          <div
            className={`${
              viewMode === "list" ? "lg:col-span-2" : ""
            } space-y-4`}
          >
            {filteredStores.length === 0 && searchLocation ? (
              <div>
                <div className="p-8 text-center">
                  <MapPin className="h-24 w-24 text-brandBlue mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-brandBlue mb-4">
                    No stores found
                  </h3>
                  <p className="text-brandBlue mb-4">
                    We couldn't find any stores matching your criteria. Try
                    expanding your search radius or removing some filters.
                  </p>
                  <Button
                    className="shadow-md hover:shadow-lg group inline-flex items-center justify-center font-bold rounded-[30px] bg-textBlue text-white py-2 px-4 pl-0 transition-all hover:bg-brandBlue hover:scale-105"
                    onClick={() => {
                      setMaxDistance(50);
                      setSelectedServices([]);
                      setSelectedStoreTypes([]);
                    }}
                  >
                    Expand Search
                  </Button>
                </div>
              </div>
            ) : (
              filteredStores.map((store) => (
                <div
                  key={store.id}
                  id={`store-${store.id}`}
                  className={`hover:shadow-lg transition-shadow cursor-pointer rounded-xl bg-white ${
                    selectedStore?.id === store.id ? "ring-2 ring-brandNeonBlue" : ""
                  }`}
                  onClick={() =>
                    setSelectedStore(
                      selectedStore?.id === store.id ? null : store
                    )
                  }
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-xl font-bold text-brandBlue">
                            {store.name}
                          </h3>
                          {/* <div
                            className={`capitalize border-[2px] rounded-xl px-2 text-sm ${
                              store.storeType === "flagship"
                                ? "border-purple-500 text-purple-700"
                                : store.storeType === "large"
                                ? "border-blue-500 text-blue-700"
                                : "border-green-500 text-green-700"
                            }`}
                          >
                            {store.storeType}
                          </div> */}
                          {isStoreOpen(store) ? (
                            <div className="bg-brandNeonBlue rounded-xl text-sm font-bold py-1 px-2 text-white whitespace-nowrap">Open Now</div>
                          ) : (
                            <div
                              className="bg-brandRed rounded-xl text-sm font-bold py-1 px-2 text-white"
                            >
                              Closed
                            </div>
                          )}
                        </div>
                        <p className="text-textBlue mb-2">{store.address}</p>
                        {store.distance && (
                          <p className="text-brandBlue font-bold">
                            {store.distance.toFixed(1)} miles away
                          </p>
                        )}
                      </div>
                      <ChevronDown
                        className={`h-5 w-5 text-gray-400 transition-transform ${
                          selectedStore?.id === store.id ? "rotate-180" : ""
                        }`}
                      />
                    </div>

                    {/* Services */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {store.services.slice(0, 3).map((service) => (
                        <div
                          key={service}
                          className="text-xs border-[1px] rounded-full border-brandLightBlue text-slate-600 px-2"
                        >
                          {service}
                        </div>
                      ))}
                      {store.services.length > 3 && (
                        <div variant="secondary" className="text-xs text-slate-600">
                          +{store.services.length - 3} more
                        </div>
                      )}
                    </div>

                    {/* Quick Info */}
                    <div className="flex items-center gap-4 text-sm text-gray-600 font-semibold">
                      <div className="flex items-center gap-1">
                        <Phone className="h-4 w-4" />
                        <span>{store.phone}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>
                          Today: {store.openingHours[currentDay]}
                          {isStoreOpen(store) && (
                            <span className="text-green-600 ml-1">(Open)</span>
                          )}
                        </span>
                      </div>
                    </div>

                    {/* Expanded Details */}
                    {selectedStore?.id === store.id && (
                      <div className="mt-6 pt-6 border-t space-y-4">
                        {/* Full Opening Hours */}
                        <div>
                          <h4 className="font-bold text-textBlue mb-2">Opening Hours</h4>
                          <div className="grid md:grid-cols-2 gap-2 text-sm">
                            {Object.entries(store.openingHours).map(
                              ([day, hours]) => (
                                <div
                                  key={day}
                                  className={`flex justify-between pr-2 ${
                                    day === currentDay
                                      ? "font-semibold text-brandBlue"
                                      : "text-gray-600"
                                  }`}
                                >
                                  <span className="capitalize">{day}:</span>
                                  <span>{hours}</span>
                                </div>
                              )
                            )}
                          </div>
                        </div>

                        {/* All Services */}
                        <div>
                          <h4 className="font-bold text-textBlue mb-2">
                            Services Available
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {store.services.map((service) => (
                              <div
                                key={service}
                                className="text-xs border-[1px] border-brandLightBlue text-slate-600 px-2 rounded-full"
                              >
                                {service}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3 pt-2">
                          <Button
                            className="shadow-md hover:shadow-lg group inline-flex items-center justify-center font-bold rounded-[30px] bg-brandGreen text-white py-2 px-4 pl-0 transition-all hover:bg-brandLightGreen hover:scale-105"
                            iconpath={<Navigation className="h-4 w-4 mr-2" />}
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(
                                `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                                  store.address
                                )}`,
                                "_blank"
                              );
                            }}
                          >
                            Get Directions
                          </Button>
                          <Button
                            className="shadow-md hover:shadow-lg group inline-flex items-center justify-center font-bold rounded-[30px] bg-textBlue text-white py-2 px-4 pl-0 transition-all hover:bg-brandBlue hover:scale-105"
                            iconpath={<Phone className="h-4 w-4 mr-2" />}
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(`tel:${store.phone}`, "_self");
                            }}
                          >
                            Call Store
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>

      {/* No Search Results */}
      {!searchLocation && (
        <div className="text-center py-16">
          <MapPin className="h-24 w-24 text-brandBlue mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-brandBlue mb-4">
            Find Your Nearest Store
          </h2>
          <p className="text-textBlue mb-8 max-w-xl mx-auto">
            Enter your postcode or town name above to discover The Entertainer
            stores near you, complete with opening hours, services, and
            directions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["London", "Birmingham", "Manchester", "Leeds", "Glasgow"].map(
              (city) => (
                <Button
                  key={city}
                  className="shadow-md hover:shadow-lg group inline-flex items-center justify-center font-bold rounded-[30px] bg-textBlue text-white py-2 px-4 pl-0 transition-all hover:bg-brandBlue hover:scale-105"
                  onClick={() => {
                    setSearchQuery(city);
                    setTimeout(() => {
                      document.querySelector('#submit').click();
                    }, 100);
                    window.scrollTo({top: 0,left: 0,behavior: "smooth",});
                  }}
                >
                  Search {city}
                </Button>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
}
