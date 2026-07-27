Three live titles now — $7.99, $6.99, and $10.99. Just swap this `books.js` into your GitHub repo and it'll redeploy with all three on the shelf. Got more titles to add, or ready to move to the next venture?
// Firefly Hollow Books — catalog
// Live, real, purchasable-now titles. Each links straight to its Amazon listing —
// no inventory to hold, no cart to manage. Add more entries here as new titles publish.
const BOOKS = [
  {
    id: "b01",
    title: "Cute Alien Pets Coloring Book for Kids Ages 4-8 with Secret Space Babble",
    subtitle: "Bold and Easy Cosmic Fun (Activity Book for Kids)",
    author: "Olivia Evans",
    price: 7.99,
    blurb: "An out-of-this-world coloring adventure with friendly alien pets — moon pups, galaxy kittens, star bunnies, and space sloths — plus playful Cosmic Language Expressions on every page.",
    tag: "Coloring Book",
    hue: 265,
    buyUrl: "https://a.co/d/0fY55fvT"
  },
  {
    id: "b02",
    title: "Big Book of Colouring",
    subtitle: "Dragons, Motorbikes, Spaceships and More",
    author: "",
    price: 6.99,
    blurb: "A big, action-packed coloring book for ages 4+ — dragons, dirt bikes, rockets, robots, dinosaurs, and a UFO or two, all ready for color.",
    tag: "Coloring Book",
    hue: 205,
    buyUrl: "https://a.co/d/0fKgoccc"
  },
  {
    id: "b03",
    title: "Princess Unicorn Fairy and Mermaid Coloring Book for Kids",
    subtitle: "",
    author: "",
    price: 10.99,
    blurb: "A sparkly coloring book packed with princesses, unicorns, fairies, and mermaids — sweet, girly designs ready for color.",
    tag: "Coloring Book",
    hue: 315,
    buyUrl: "https://a.co/d/0e0bOSCe"
  },
  {
    id: "b04",
    title: "24-Book Coloring & Activity Book Bundle",
    subtitle: "Assorted Favorite Characters",
    author: "",
    price: 24.99,
    blurb: "A bumper bundle of 24 coloring and activity books featuring a wide mix of kids' favorite characters — great value for a party favor stash or a rainy-day bin.",
    tag: "Bundle",
    hue: 15,
    buyUrl: "https://a.co/d/07xVrqjJ"
  }
];
