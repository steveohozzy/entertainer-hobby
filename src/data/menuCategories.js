import { Star } from "lucide-react"

const menuCategories = [
    {
      id: "brands",
      name: "Brands",
      hasSubmenu: true,
      icon: <svg
        xmlns="http://www.w3.org/2000/svg"
        width=" 22"
        height=" 22"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.94971 4.44987C1.94969 3.06915 3.06898 1.94985 4.4497 1.94984L12.0209 1.94983C12.8165 1.94983 13.5796 2.2659 14.1422 2.82851L22.0417 10.728C23.6038 12.2901 23.6038 14.8228 22.0417 16.3849L16.3848 22.0417C14.8227 23.6038 12.2901 23.6038 10.728 22.0417L2.82846 14.1422C2.26586 13.5796 1.94979 12.8166 1.94978 12.0209L1.94971 4.44987ZM8.5 10C9.32843 10 10 9.32843 10 8.5C10 7.67157 9.32843 7 8.5 7C7.67157 7 7 7.67157 7 8.5C7 9.32843 7.67157 10 8.5 10Z"
          fill="currentColor"
        />
      </svg>,
      items: [
        {
          name: "All Brands",
          href: "/category",
        },
        {
          name: "Squishmallows",
          href: "/category",
        },
        {
          name: "LEGO",
          href: "/category",
        },
        {
          name: "Barbie",
          href: "/category",
        },
        {
          name: "Fuggler",
          href: "/category",
        },
        {
          name: "Disney",
          href: "/category",
        },
        {
          name: "XSHOT",
          href: "/category",
        },
        {
          name: "Bluey",
          href: "/category",
        },
        {
          name: "Gabbys Dollouse",
          href: "/category",
        },
        {
          name: "LOL Surprise!",
          href: "/category",
        },
        {
          name: "Paw Patrol",
          href: "/category",
        },
        {
          name: "Peppa Pig",
          href: "/category",
        },
        {
          name: "Spider-Man",
          href: "/category",
        },
        {
          name: "Tonies",
          href: "/category",
        },
        {
          name: "Hot Wheels",
          href: "/category",
        },
        {
          name: "Nerf",
          href: "/category",
        },
        {
          name: "Sylvanian Families",
          href: "/category",
        },
        {
          name: "Rainbow High",
          href: "/category",
        },
        {
          name: "Meccano",
          href: "/category",
        },
        {
          name: "Funko POP!",
          href: "/category",
        },
      ],
    },
    {
      id: "type-of-toy",
      name: "Type of toy",
      hasSubmenu: true,
      icon: <svg
                xmlns="http://www.w3.org/2000/svg"
                width="37"
                height="50"
                viewBox="0 0 37 50"
                fill="none"
              >
                <path
                  d="M18.5547 32.5V23.75H22.0547V37.75C22.0547 38.224 21.8724 38.625 21.5078 38.9531C21.1797 39.3177 20.7786 39.5 20.3047 39.5H6.30469C5.83073 39.5 5.41146 39.3177 5.04688 38.9531C4.71875 38.625 4.55469 38.224 4.55469 37.75V23.75H8.05469V32.5H18.5547ZM35.7812 19.2656C36.1458 19.849 36.1641 20.4505 35.8359 21.0703C35.5078 21.6901 34.9974 22 34.3047 22H2.80469C2.11198 22 1.60156 21.6901 1.27344 21.0703C0.945312 20.4505 0.981771 19.849 1.38281 19.2656L6.03125 12.2656C6.35938 11.7552 6.83333 11.5 7.45312 11.5H29.6562C30.276 11.5 30.75 11.7552 31.0781 12.2656L35.7812 19.2656ZM29.0547 38.625V23.75H32.5547V38.625C32.5547 38.8802 32.4635 39.0807 32.2812 39.2266C32.1354 39.4089 31.9349 39.5 31.6797 39.5H29.9297C29.6745 39.5 29.4557 39.4089 29.2734 39.2266C29.1276 39.0807 29.0547 38.8802 29.0547 38.625Z"
                  fill="currentColor"
                />
              </svg>,
      items: [
        {
          name: "Action Toys",
          href: "/category",
          hasSubItems: true,
          subItems: [
            { name: "See All", href: "/category", },
            { name: "Action Figures", href: "/category/action-figures", },
            { name: "Action Toy Playsets", href: "/category", },
            { name: "Battle Toys", href: "/category", },
            { name: "Pre-School Figures and Playsets", href: "/category", },
          ],
        },
        {
          name: "Dolls",
          href: "/category",
          hasSubItems: true,
          subItems: [
            { name: "See All", href: "/category", },
            { name: "Baby Dolls", href: "/category", },
            { name: "Fashion Dolls", href: "/category", },
            { name: "TV & Film Dolls", href: "/category", },
            { name: "Doll Houses", href: "/category", },
          ],
        },
        {
          name: "Plushies & Soft Toys",
          href: "/category",
          hasSubItems: true,
          subItems: [
            { name: "See All", href: "/category", },
            { name: "Movie & TV Plushies", href: "/category", },
            { name: "Soft Animal Toys", href: "/category", },
            { name: "Teddy Bears", href: "/category", },
            { name: "Puppy Toys", href: "/category", },
          ],
        },
        {
          name: "Construction Toys",
          href: "/category",
          hasSubItems: true,
          subItems: [
            { name: "Building Blocks", href: "/category", },
            { name: "Kids Building Sets", href: "/category", },
            { name: "Magnetic Tiles & Sets", href: "/category", },
          ],
        },
        {
          name: "Arts & Crafts For Kids",
          href: "/category",
          hasSubItems: true,
          subItems: [
            { name: "See All", href: "/category", },
            { name: "Painting Sets For Kids", href: "/category", },
            { name: "Activity Books & Stickers", href: "/category", },
            { name: "Drawing & Colouring Sets", href: "/category", },
            { name: "Easel Boards & Aqua Mats", href: "/category", },
          ],
        },
        {
          name: "Games & puzzles",
          href: "/category",
          hasSubItems: true,
          subItems: [
            { name: "See All", href: "/category", },
            { name: "Kids Jigsaws & Puzzles", href: "/category", },
            { name: "Board Games For Kids", href: "/category", },
            { name: "Board Games For Adults", href: "/category", },
            { name: "Family Board Games", href: "/category", },
          ],
        },
        {
          name: "Pre-School Toys",
          href: "/category",
          hasSubItems: true,
          subItems: [
            { name: "See All", href: "/category", },
            { name: "Toddler & Baby Activity Toys", href: "/category", },
            { name: "Baby Playmats & Gyms", href: "/category", },
            { name: "Rattle & Teething Toys", href: "/category", },
            { name: "Wooden Baby Toys", href: "/category", },
          ],
        },
        {
          name: "Outdoor Toys For Kids",
          href: "/category",
          hasSubItems: true,
          subItems: [
            { name: "See All", href: "/category", },
            { name: "Kids Bikes", href: "/category", },
            { name: "Kids Scooters", href: "/category", },
            { name: "Kids Trampolines", href: "/category", },
            { name: "Toy Blasters", href: "/category", },
          ],
        },
        {
          name: "Transport & Car Toys",
          href: "/category",
          hasSubItems: true,
          subItems: [
            { name: "See All", href: "/category", },
            { name: "Toy Cars", href: "/category", },
            { name: "Diggers & Trucks", href: "/category", },
            { name: "Train Toys", href: "/category", },
            { name: "Car Race Tracks", href: "/category", },
          ],
        },
        {
          name: "Kids Fancy Dress Up",
          href: "/category",
          hasSubItems: true,
          subItems: [
            { name: "See All", href: "/category", },
            { name: "Princess Dress Up Outfits", href: "/category", },
            { name: "Kids Superhero Costumes", href: "/category", },
            { name: "Face Paint For Kids", href: "/category", },
            { name: "Emergency Services Dress Up", href: "/category", },
          ],
        },
        {
          name: "Animal Toys & Figures",
          href: "/category",
          hasSubItems: true,
          subItems: [
            { name: "See All", href: "/category", },
            { name: "Dinosaur Toys", href: "/category", },
            { name: "Farm Animal Toys", href: "/category", },
            { name: "Jungle Animal & Safari Toys", href: "/category", },
            { name: "Unicorn Toys", href: "/category", },
          ],
        },
        {
          name: "Pocket Money Toys",
          href: "/category",
          hasSubItems: true,
          subItems: [
            { name: "Blind Bags & Mystery Figures", href: "/category", },
            { name: "Yo-Yos", href: "/category", },
            { name: "Cards & Stickers", href: "/category", },
          ],
        },
        {
          name: "Electronic Toys",
          href: "/category",
          hasSubItems: true,
          subItems: [
            { name: "See All", href: "/category", },
            { name: "Electronic Pet toys", href: "/category", },
            { name: "Kids Cameras", href: "/category", },
            { name: "Robot Toys", href: "/category", },
            { name: "Kids Walkie Talkies", href: "/category", },
          ],
        },
        {
          name: "Educational Toys & Games",
          href: "/category",
          hasSubItems: true,
          subItems: [
            { name: "See All", href: "/category", },
            { name: "Kids Musical Instrument Toys", href: "/category", },
            { name: "Kids Watches", href: "/category", },
            { name: "STEM Toys & Kits", href: "/category", },
            { name: "Electronic Learning Toys", href: "/category", },
          ],
        },
      ],
    },
    {
      id: "outdoor",
      name: "Outdoor",
      hasSubmenu: true,
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M17,8C8,10,5.9,16.17,3.82,21.34L5.71,22l1-2.3A4.49,4.49,0,0,0,8,20C19,20,22,3,22,3,21,5,14,5.25,9,6.25S2,11.5,2,13.5a6.22,6.22,0,0,0,1.75,3.75C7,8,17,8,17,8Z"
                />
                <rect width="24" height="24" fill="none" />
              </svg>,
      items: [
        {
          name: "See All",
          href: "/category",
        },
        {
          name: "Bikes",
          href: "/category",
        },
        {
          name: "Sand & Water Tables",
          href: "/category",
        },
        {
          name: "Garden Games",
          href: "/category",
        },
        {
          name: "Slides",
          href: "/category",
        },
        {
          name: "Scooters",
          href: "/categorys",
        },
        {
          name: "Sandpits & Sand Toys",
          href: "/category",
        },
        {
          name: "Garden Play Centres",
          href: "/category",
        },
        {
          name: "Swings",
          href: "/category",
        },
        {
          name: "Ride-Ons",
          href: "/category",
        },
        {
          name: "Paddling Pools",
          href: "/category",
        },
        {
          name: "Trampolines",
          href: "/category",
        },
        {
          name: "Bubbles",
          href: "/category",
        },
        {
          name: "Trikes",
          href: "/category",
        },
        {
          name: "Water Blasters",
          href: "/category",
        },
        {
          name: "Playhouses",
          href: "/category",
        },
      ],
    },
    {
      id: "age-groups",
      name: "Shop by Age",
      hasSubmenu: true,
      icon: <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                version="1.1"
                className="si-glyph si-glyph-birthday-cake"
                width="24"
                height="24"
              >
                <g
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <g fill="currentColor">
                    <path
                      d="M2.002,13.062 L2.002,14.169 C2.002,15.474 1.895,15.944 3.484,15.944 L12.394,15.944 C13.982,15.944 13.874,15.473 13.874,14.169 L13.874,13.062 L2.002,13.062 L2.002,13.062 Z"
                      className="si-glyph-fill"
                    ></path>

                    <rect
                      x="4"
                      y="3"
                      width="0.935"
                      height="3.072"
                      className="si-glyph-fill"
                    ></rect>

                    <rect
                      x="7"
                      y="3"
                      width="1"
                      height="2.969"
                      className="si-glyph-fill"
                    ></rect>

                    <rect
                      x="11"
                      y="3"
                      width="0.99"
                      height="2.851"
                      className="si-glyph-fill"
                    ></rect>

                    <path
                      d="M4.965,0.975 C5.065,1.381 4.907,1.848 4.528,1.89 C4.174,1.93 3.903,1.473 4.175,1.02 C4.454,0.56 4.528,0.06 4.528,0.06 C4.528,0.06 4.848,0.487 4.965,0.975 L4.965,0.975 Z"
                      className="si-glyph-fill"
                    ></path>

                    <path
                      d="M7.938,1.021 C8.043,1.447 7.877,1.939 7.469,1.983 C7.088,2.025 6.797,1.544 7.091,1.069 C7.391,0.584 7.469,0.059 7.469,0.059 C7.469,0.059 7.811,0.509 7.938,1.021 L7.938,1.021 Z"
                      className="si-glyph-fill"
                    ></path>

                    <path
                      d="M11.974,1.023 C12.086,1.449 11.908,1.939 11.476,1.983 C11.072,2.025 10.762,1.545 11.075,1.07 C11.394,0.587 11.476,0.062 11.476,0.062 C11.476,0.062 11.839,0.512 11.974,1.023 L11.974,1.023 Z"
                      className="si-glyph-fill"
                    ></path>

                    <g transform="translate(2.000000, 6.000000)">
                      <path
                        d="M1.146,2.437 C1.561,2.437 2.162,2.043 2.339,1.905 C2.344,1.899 3.066,1.221 3.941,1.221 C4.812,1.221 5.564,1.893 5.595,1.922 C5.757,2.062 6.293,2.437 6.769,2.437 C7.331,2.437 7.877,1.932 7.877,1.932 C7.917,1.894 8.664,1.221 9.565,1.221 C10.47,1.221 11.191,1.899 11.221,1.928 C11.382,2.066 11.685,2.269 11.958,2.37 C11.927,1.069 11.329,0.03 9.782,0.03 L2.259,0.03 C0.868,0.03 0.241,0.867 0.105,1.979 C0.33,2.146 0.793,2.437 1.146,2.437 L1.146,2.437 Z"
                        className="si-glyph-fill"
                      ></path>

                      <path
                        d="M10.717,3.469 C10.699,3.453 10.16,2.95 9.566,2.95 C8.967,2.95 8.401,3.457 8.394,3.463 C8.368,3.486 7.643,4.163 6.77,4.163 C5.905,4.163 5.129,3.496 5.096,3.467 C4.933,3.321 4.414,2.95 3.942,2.95 C3.38,2.95 2.838,3.453 2.831,3.457 C2.716,3.549 1.899,4.163 1.147,4.163 C0.761,4.163 0.375,4.004 0.077,3.838 L0.077,5.945 L11.966,5.945 L11.966,4.131 C11.355,4.004 10.789,3.53 10.717,3.469 L10.717,3.469 Z"
                        className="si-glyph-fill"
                      ></path>
                    </g>

                    <rect
                      x="0"
                      y="14"
                      width="15.851"
                      height="1.935"
                      className="si-glyph-fill"
                    ></rect>
                  </g>
                </g>
              </svg>,
      items: [
        {
          name: "Ages 0-3",
          href: "/category?age=0-3",
        },
        {
          name: "Ages 3-5",
          href: "/category?age=3-5",
        },
        {
          name: "Ages 5-8",
          href: "/category?age=5-8",
        },
        {
          name: "Ages 8-11",
          href: "/category?age=8-11",
        },
        {
          name: "11 +",
          href: "/category?age=11-plus",
        },
        {
          name: "Big Kids",
          href: "/category?age=big-kids",
        },
      ],
    },
    {
      id: "offers",
      name: "Offers",
      hasSubmenu: true,
      icon: <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.0"
                id="Layer_1"
                viewBox="0 0 64 64"
                enableBackground="new 0 0 64 64"
              >
                <path
                  fill="currentColor"
                  d="M60,4H48c0-2.215-1.789-4-4-4H20c-2.211,0-4,1.785-4,4H4C1.789,4,0,5.785,0,8v8c0,8.836,7.164,16,16,16  c0.188,0,0.363-0.051,0.547-0.059C17.984,37.57,22.379,41.973,28,43.43V56h-8c-2.211,0-4,1.785-4,4v4h32v-4c0-2.215-1.789-4-4-4h-8  V43.43c5.621-1.457,10.016-5.859,11.453-11.488C47.637,31.949,47.812,32,48,32c8.836,0,16-7.164,16-16V8C64,5.785,62.211,4,60,4z   M8,16v-4h8v12C11.582,24,8,20.414,8,16z M56,16c0,4.414-3.582,8-8,8V12h8V16z"
                />
              </svg>,
      items: [
        {
          name: "Buy 1 Get 1 Half Price on Selected Toys",
          href: "/category",
        },
        {
          name: "Minecraft 2 for £20",
          href: "/category",
        },
        {
          name: "Hot Wheels 3 for 2 Offer",
          href: "/category",
        },
        {
          name: "Price Drop",
          href: "/category",
        },
        {
          name: "Paw Patrol 2 for £15",
          href: "/categorys",
        },
        {
          name: "Barbie & Polly Pocket 3 for 2",
          href: "/category",
        },
      ],
    },
    {
      id: "new-toys",
      name: "New Toys",
      hasSubmenu: false,
      href: "/category",
      icon: <Star />,
    },
    {
      id: "discover",
      name: "Discover",
      hasSubmenu: true,
      icon: <svg
                xmlns="http://www.w3.org/2000/svg"
                width=" 22"
                height=" 22"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M9.03429 5.96305L6.49114 8.49856C6.02369 8.9646 5.59488 9.3921 5.25624 9.77856C5.03877 10.0267 4.82145 10.2984 4.63737 10.5985L4.61259 10.5738C4.56555 10.5269 4.54201 10.5034 4.51839 10.4805C4.07636 10.0516 3.55641 9.71062 2.98636 9.47575C2.9559 9.4632 2.92498 9.45095 2.86314 9.42645L2.48449 9.27641C1.97153 9.07315 1.83482 8.41279 2.22514 8.02365C3.34535 6.90684 4.69032 5.56594 5.33941 5.29662C5.91185 5.05911 6.53023 4.98008 7.12664 5.06822C7.67311 5.14898 8.19006 5.42968 9.03429 5.96305Z"
                  fill="currentColor"
                />
                <path
                  d="M13.3767 19.3132C13.5816 19.5212 13.7177 19.6681 13.8408 19.8251C14.0031 20.0322 14.1483 20.2523 14.2748 20.4829C14.4172 20.7426 14.5278 21.02 14.749 21.5748C14.929 22.0265 15.5272 22.1459 15.8746 21.7995L15.9586 21.7157C17.0788 20.5988 18.4237 19.2579 18.6938 18.6108C18.9321 18.04 19.0113 17.4235 18.9229 16.8289C18.8419 16.2841 18.5605 15.7688 18.0256 14.9273L15.474 17.4713C14.9959 17.9479 14.5576 18.385 14.1612 18.7273C13.9236 18.9325 13.6637 19.1376 13.3767 19.3132Z"
                  fill="currentColor"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.4467 16.3769L20.2935 10.5476C21.1356 9.70811 21.5566 9.28836 21.7783 8.75458C22.0001 8.22081 22.0001 7.62719 22.0001 6.43996V5.87277C22.0001 4.04713 22.0001 3.13431 21.4312 2.56715C20.8624 2 19.9468 2 18.1157 2H17.5468C16.356 2 15.7606 2 15.2252 2.2211C14.6898 2.4422 14.2688 2.86195 13.4268 3.70146L7.57991 9.53078C6.59599 10.5117 5.98591 11.12 5.74966 11.7075C5.67502 11.8931 5.6377 12.0767 5.6377 12.2692C5.6377 13.0713 6.2851 13.7168 7.57991 15.0077L7.75393 15.1812L9.79245 13.1123C10.0832 12.8172 10.558 12.8137 10.8531 13.1044C11.1481 13.3951 11.1516 13.87 10.8609 14.1651L8.8162 16.2403L8.95326 16.3769C10.2481 17.6679 10.8955 18.3133 11.7 18.3133C11.8777 18.3133 12.0478 18.2818 12.2189 18.2188C12.8222 17.9966 13.438 17.3826 14.4467 16.3769ZM17.1935 9.5312C16.435 10.2874 15.2053 10.2874 14.4468 9.5312C13.6883 8.775 13.6883 7.54895 14.4468 6.79274C15.2053 6.03653 16.435 6.03653 17.1935 6.79274C17.952 7.54895 17.952 8.775 17.1935 9.5312Z"
                  fill="currentColor"
                />
              </svg>,
      items: [
        {
          name: "Blogs",
          href: "/category",
        },
        {
          name: "Gift Cards",
          href: "/category",
        },
        {
          name: "Returns",
          href: "/category",
        },
        {
          name: "Home of Collectibles",
          href: "/category",
        },
        {
          name: "About Us",
          href: "/category",
        },
        {
          name: "Track Your Order",
          href: "/account",
        },
        {
          name: "Exclusive to The Entertainer",
          href: "/category",
        },
        {
          name: "Contact Us",
          href: "/category",
        },
        {
          name: "Store Finder",
          href: "/store-finder",
        },
        {
          name: "Movie Page",
          href: "/category",
        },
        {
          name: "Delivery Options",
          href: "/category",
        },
        {
          name: "Present Finder",
          href: "/present-finder",
        },
      ],
    },
    {
      id: "clearance",
      name: "Clearance",
      hasSubmenu: false,
      bgColor: 'bg-brandRed',
      color: 'text-white',
      href: "/category",
      icon: <svg
                xmlns="http://www.w3.org/2000/svg"
                width=" 22"
                height=" 22"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21.4143 3.29285C21.8048 3.68337 21.8048 4.31653 21.4143 4.70706L4.70718 21.4142C4.31666 21.8047 3.68349 21.8047 3.29297 21.4142L2.58586 20.7071C2.19534 20.3165 2.19534 19.6834 2.58586 19.2928L19.293 2.58574C19.6835 2.19522 20.3167 2.19522 20.7072 2.58574L21.4143 3.29285Z"
                  fill="currentColor"
                />
                <path
                  d="M7.50009 2.99997C5.5671 2.99997 4.00009 4.56697 4.00009 6.49997C4.00009 8.43297 5.5671 9.99997 7.50009 9.99997C9.43309 9.99997 11.0001 8.43297 11.0001 6.49997C11.0001 4.56697 9.43309 2.99997 7.50009 2.99997Z"
                  fill="currentColor"
                />
                <path
                  d="M16.5001 14C14.5671 14 13.0001 15.567 13.0001 17.5C13.0001 19.433 14.5671 21 16.5001 21C18.4331 21 20.0001 19.433 20.0001 17.5C20.0001 15.567 18.4331 14 16.5001 14Z"
                  fill="currentColor"
                />
              </svg>,
    },
  ]

  export default menuCategories