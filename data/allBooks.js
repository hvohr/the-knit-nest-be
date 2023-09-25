const allBooks = [
  {
    name: 'Mama Made Minis Knotted Loveys: 16 Heirloom Amigurumi Crochet Patterns',
    author: 'Alyson Dratch, Lindsay McNutt',
    id: 20,
    price: '$21.99',
    details: {
      type: "Paperback",
      isbn: 9781645679356,
      publisher: "Page Street Publishing",
      publicationDate: "11/13/2023",
      pages: 144,
      productDimensions: "7.00(w) x 9.00(h) x 1.00(d)"
    },
    description: 'Crochet charming knotted loveys with this easy guide to amigurumi from Alyson Dratch and Lindsay McNutt, the designers and mothers behind Mama Made Minis. From snuggly farmyard friends like Lettie Lamb and CeeCee Chick to magical creatures like Una Unicorn and Dusty Dragon, these 16 patterns are sure to bring comfort and joy to your minis every day. Thanks to the heirloom quality of these designs, you can create each stitch with love, knowing that your child/s new plushie will be by their side for years to come!',
    image: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9781645679356_p0_v3_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D",
    addedToCart: false,
  },
  {
    name: 'Knit and Crochet Step-by-Step',
    author: 'Haddenden, Patmore, Harding',
    id: 30,
    price: '$15.59',
    details: {
      type: "Hardcover",
      isbn: 9780744085365,
      publisher: "DK",
      publicationDate: "02/15/2023",
      pages: 320,
      productDimensions: "9.10(w) x 7.90(h) x 1.20(d)"
    },
    description: 'A lovingly illustrated guide for beginners on the classic knitting and crochet techniques that will help you get started with your own creations.The practical instructions give you everything you need to begin—crochet granny squares, flowers or baby gifts. Master basic stitches and classic techniques, including ribs, Fair Isle, and intarsia, or try your hand at one of the eye-catching projects.',
    image: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9780744085365_p0_v1_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D",
    addedToCart: false,
  },
  {
    name: 'The Principles of Knitting',
    author: 'June Hemmons Hiatt',
    id: 40,
    price: '$60.00',
    details: {
      type: "Hardcover",
      isbn: 9781416535171,
      publisher: "Touchstone",
      publicationDate: "02/14/2012",
      pages: 736,
      productDimensions: "8.60(w) x 11.00(h) x 1.90(d)"
    },
    description: 'A treasured guide beloved by knitters everywhere, the classic book The Principles of Knitting is finally available again in a fully revised and updated edition. This is the definitive book on knitting techniques, with valuable information for everyone from beginners to experienced knitters. June Hiatt presents not only a thorough, thoughtful approach to the craft, but also a passion for carrying on the art of knitting to future generations. She has repeatedly tested the various techniques and presents them with clear, easy-to-follow instructions—as well as an explanation of what each one can contribute to your knitting. ',
    image: 'https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9781416535171_p0_v1_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D',
    addedToCart: false,
  },
  {
    name: 'Retro Crochet Style: 15 Beginner-Friendly Patterns to Create Your Vintage-Inspired Closet',
    author: 'Savannah Price',
    id: 120,
    price: '$22.99',
    details: {
      type: "Paperback",
      isbn: 9781645678915,
      publisher: "Page Street Publishing",
      publicationDate: "09/05/2023",
      pages: 152,
      productDimensions: "7.70(w) x 8.90(h) x 0.40(d)"
    },
    description: 'Learn to create your own fabulous and one-of-a-kind wardrobe with Savannah Price/s Retro Crochet Style. This book will show you, step by step, how to make the perfect sweater, skirt, pants or dress, all of which can be customized to fit every body shape and size. Be your gorgeous self in clothing that was designed specifically for you or put a smile on your best friend/s face by gifting them a stylish new sweater handmade with love.',
    image: 'https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9781645678915_p0_v1_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D',
    addedToCart: false,
  },
]

module.exports = allBooks;