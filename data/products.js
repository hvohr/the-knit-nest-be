const products = [
  {
    id: 1,
    name: 'Mama Made Minis Knotted Loveys: 16 Heirloom Amigurumi Crochet Patterns',
    brand: null,
    author: 'Alyson Dratch, Lindsay McNutt',
    category: 'books',
    color: null,
    yarnWeight: null,
    price: '$21.99',
    details: "Type: Paperback, ISBN: 9781645679356, Publisher: Page Street Publishing, Publication Date: 11/13/2023, Pages: 144, Product Dimensions: 7.00(w) x 9.00(h) x 1.00(d)",
    description: 'Crochet charming knotted loveys with this easy guide to amigurumi from Alyson Dratch and Lindsay McNutt, the designers and mothers behind Mama Made Minis. From snuggly farmyard friends like Lettie Lamb and CeeCee Chick to magical creatures like Una Unicorn and Dusty Dragon, these 16 patterns are sure to bring comfort and joy to your minis every day. Thanks to the heirloom quality of these designs, you can create each stitch with love, knowing that your child/s new plushie will be by their side for years to come!',
    image: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9781645679356_p0_v3_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D",
  },
  {
    id: 2,
    name: 'Knit and Crochet Step-by-Step',
    brand: null,
    author: 'Haddenden, Patmore, Harding',
    color: null,
    yarnWeight: null,
    category: 'books',
    price: '$15.59',
    details: "Type: Hardcover, ISBN: 9780744085365, Publisher: DK, Publication Date: 02/15/2023, Pages: 320, Product Dimensions: 9.10(w) x 7.90(h) x 1.20(d)",
    description: 'A lovingly illustrated guide for beginners on the classic knitting and crochet techniques that will help you get started with your own creations.The practical instructions give you everything you need to begin—crochet granny squares, flowers or baby gifts. Master basic stitches and classic techniques, including ribs, Fair Isle, and intarsia, or try your hand at one of the eye-catching projects.',
    image: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9780744085365_p0_v1_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D",
  },
  {
    id: 3,
    name: 'The Principles of Knitting',
    brand: null,
    author: 'June Hemmons Hiatt',
    color: null,
    yarnWeight: null,
    category: 'books',
    price: '$60.00',
    details: "Type: Hardcover, ISBN: 9781416535171, Publisher: Touchstone, Publication Date: 02/14/2012, Pages: 736, Product Dimensions: 8.60(w) x 11.00(h) x 1.90(d)",
    description: 'A treasured guide beloved by knitters everywhere, the classic book The Principles of Knitting is finally available again in a fully revised and updated edition. This is the definitive book on knitting techniques, with valuable information for everyone from beginners to experienced knitters. June Hiatt presents not only a thorough, thoughtful approach to the craft, but also a passion for carrying on the art of knitting to future generations. She has repeatedly tested the various techniques and presents them with clear, easy-to-follow instructions—as well as an explanation of what each one can contribute to your knitting. ',
    image: 'https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9781416535171_p0_v1_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D',
  },
  {
    id: 4,
    name: 'Retro Crochet Style: 15 Beginner-Friendly Patterns to Create Your Vintage-Inspired Closet',
    brand: null,
    author: 'Savannah Price',
    color: null,
    yarnWeight: null,
    category: 'books',
    price: '$22.99',
    details: "Type: Paperback, ISBN: 9781645678915, Publisher: Page Street Publishing, Publication Date: 09/05/2023, Pages: 152, Product Dimensions: 7.70(w) x 8.90(h) x 0.40(d)",
    description: 'Learn to create your own fabulous and one-of-a-kind wardrobe with Savannah Price/s Retro Crochet Style. This book will show you, step by step, how to make the perfect sweater, skirt, pants or dress, all of which can be customized to fit every body shape and size. Be your gorgeous self in clothing that was designed specifically for you or put a smile on your best friend/s face by gifting them a stylish new sweater handmade with love.',
    image: 'https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9781645678915_p0_v1_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D',
  },
  {
    id: 41,
    name: 'Knitting & Crocheting All-in-One For Dummies',
    brand: null,
    author: 'Pam Allen, Tracy L. Barr, Marly Bird, Susan Brittain, Karen Manthey',
    color: null,
    yarnWeight: null,
    category: 'books',
    price: '$34.99',
    details: "Type: Paperback, ISBN: 9781119652939, Publisher:Wiley, Publication Date: 03/04/2020, Pages: 672, Product Dimensions: 7.30(w) x 9.20(h) x 1.40(d)",
    description: 'Knitting and crocheting go hand-in-hand and are the most popular yarn crafts today. This one-stop guide to all things needles, hooks, and yarn will give you everything you need to know to get started knitting or crocheting. The book covers absolute basics such as selecting yarn, casting on, and even how to hold the tools and yarn, to understanding stitches, checking gauge, and deciphering patterns.',
    image: 'https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9781119652939_p0_v3_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D',
  },
  {
    id: 42,
    name: 'Knitting Bag of Tricks: Over 70 sanity saving hacks for better knitting',
    brand: null,
    author: 'Patty Lyons',
    color: null,
    yarnWeight: null,
    category: 'books',
    price: '$22.99',
    details: "Type: Paperback, ISBN: 9781446309117, Publisher:David & Charles, Publication Date: 10/11/2022, Pages: 208, Product Dimensions: 5.80(w) x 8.20(h) x 0.60(d)",
    description: 'Solve your knitting problems - from edges that wont behave to getting your yarn tension right - with over 70 brand new knitting hacks! Inspired by questions asked by Pattys students from around the world, this book features tutorials for knitters of all levels. It also features over 200 technical illustrations to help you learn new skills with clear step-by-step instructions.',
    image: 'https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9781446309117_p0_v2_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D',
  },
  {
    id: 43,
    name: 'KnitOvation Stitch Dictionary: 150+ Modern Colorwork Knitting Motifs',
    brand: null,
    author: 'Andrea Rangel',
    color: null,
    yarnWeight: null,
    category: 'books',
    price: '$28.00',
    details: "Type: Hardcover, ISBN: 9780593422700, Publisher: Penguin Publishing Group, Publication Date: 10/10/2023, Pages: 160, Product Dimensions: 8.20(w) x 9.90(h) x 0.60(d)",
    description: 'KnitOvation includes more than 150 brand new colorwork motifs to expand knitters creative possibilities and draw them further into the world of stranded knitting with clever, quirky, and beautiful motifs including botanicals, animals, and geometric patterns. The motifs are accompanied by a selection of accessory and garment designs to illustrate how the motifs can be used, and technical information on new topics including using charts and adding flourishes with duplicate stitch.',
    image: 'https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9780593422700_p0_v1_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D',
  },
  {
    id: 44,
    name: 'Charming Colorwork Socks: 25 Delightful Knitting Patterns for Colorful, Comfy Footwear      ',
    brand: null,
    author: 'Charlotte Stone',
    color: null,
    yarnWeight: null,
    category: 'books',
    price: '$23.99',
    details: "Type: Paperback, ISBN: 9781645676805, Publisher: Page Street Publishing, Publication Date: 09/20/2022, Pages: 176, Product Dimensions: 	7.70(w) x 8.70(h) x 0.50(d)",
    description: 'Get ready to cast on the colorwork socks of your dreams! Prolific knitwear designer and colorwork aficionado Charlotte Stone has created a sensational variety of patterns in her signature colorful style, so you can flaunt your personality and keep your feet cozy at the same time. Whether or not you’re experienced in knitting socks or stranded colorwork, you’re in good hands with Charlotte’s best tips, tricks and techniques at the ready. Easy enough to whip up in a day or two, these socks are perfect to make for yourself or gift to your loved ones—if you can bear to part with them!',
    image: 'https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9781645676805_p0_v3_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D',
  },
  {
    id: 101,
    name: 'Crochet Cafe: Recipes for Amigurumi Crochet Patterns',
    brand: null,
    author: 'Lauren Espy, Paige Tate & Co. (Produced by)',
    category: 'books',
    color: null,
    yarnWeight: null,
    price: '$19.95',
    details: "Type: Paperback, ISBN: 9781944515935, Publisher: Blue Star Press, Publication Date: 07/14/2020, Pages: 216, Product Dimensions: 7.50(w) x 9.90(h) x 0.80(d)",
    description: 'Crochet Cafe features over 30 adorable and appetizing food-inspired amigurumi patterns. Lauren Espy, author of 2019/s No. 1 best-selling amigurumi book in the United States, Whimsical Stitches, gives you the ingredients and recipes you need to crochet your favorite meals and treats. Easy-to-follow patterns, detailed photographs, and helpful tips make this book perfect for novice and experienced crocheters alike.',
    image: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9781944515935_p0_v7_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D",
  },
  {
    id: 102,
    name: 'Crochet Impkins: Over a million possible combinations! Yes, really!',
    brand: null,
    author: 'Megan Lapp',
    category: 'books',
    color: null,
    yarnWeight: null,
    price: '$28.95',
    details: "Type: Paperback, ISBN: 9780811771603, Publisher: Stackpole Books, Publication Date: 08/29/2023, Pages: 186, Product Dimensions: 8.50(w) x 10.90(h) x 0.50(d)",
    description: 'Enter the world of the reclusive yet mischievous Impkins! I’m sure you have seen them out of the corner of your eye from time to time, racing from hiding place to nook or cranny—odd little creatures of stitch and stuffing, of endless variety in form and manner. In these pages, you will not find a taxonomy of their features or a list of the names by which you might call them, you will find guidance on something far more important—the techniques and methods by which you might craft one of these little stitchlings of your very own. It is a wonderful thing, I assure you, to bring an Impkin to life with hook and yarn, and herein you will find the detailed instructions necessary to craft one, with an endless array of options for ears, antennae, hats, wings, tails, scales, horns, hairstyles, clothing, and accessories.',
    image: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9780811771603_p0_v2_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D",
  },
  {
    id: 5,
    name: 'Wool-Ease® Fair Isle Yarn',
    brand: 'Lion Brand',
    category: 'yarn',
    yarnWeight: 'Medium 4',
    price: '$6.99',
    color: "Beige/Olive/Green [629-205CE]",
    details: "Yarn Weight: 4 Medium/Worsted, Crochet Gauge: 13.2 sc x 16 r on J-10 (6mm), Knit Gauge: 18 sts x 24 r on #8 (5mm), Yarn Weight : 5.3oz, Length: 348yd, Fiber: Acrylic, Wool, Care Details: Machine Wash Gentle, Tumble Dry Low",
    description: 'If you/ve ever wanted to make a Fair Isle project and felt too intimidated to try, you’re going to love this yarn! We’re excited to debut Wool-Ease Fair Isle: its unique dye pattern mimics the look of Fair Isle without the hassle of multiple balls of yarn or counting stitches. And as a member of the beloved Wool-Ease family, it has the feel, warmth, and softness of wool with the easy care of acrylic. With a generous 348 yards you can make up to three projects from one ball!',
    image: "https://www.lionbrand.com/cdn/shop/files/Sk-629-205_800x.jpg?v=1688064493",
  },
  {
    id: 6,
    name: 'Wool-Ease® Recycled Yarn',
    brand: 'Lion Brand',
    category: 'yarn',
    price: '$4.19',
    color: "Cream/White [632-098W]",
    yarnWeight: 'Medium 4',
    details: "Yarn Weight: 4 Medium/Worsted, Crochet Gauge: 13 sc x 16 r on J-10 (6mm), Knit Gauge: 18 sts x 24 r on #8 (5mm), Yarn Weight : 3oz, Length: 196yd, Fiber: Acrylic, Wool, Care Details: Machine wash and dry",
    description: "Wool-Ease just went sustainable! The beloved leader of the Wool-Ease family is now available in fully recycled materials. Don/t worry, it still has the feel, warmth, and softness of wool that it/s known for! Every 3 oz (85 g) ball has 196 yd (179 m) to work with while helping to protect the environment, so grab your favorite color and get going on hats, scarves, sweaters, and anything else you can think of: this versatile yarn is great for it all!",
    image: "https://www.lionbrand.com/cdn/shop/files/Sk-632-098_800x.jpg?v=1688055675",
  },
  {
    id: 7,
    name: 'Bernat Blanket Yarn',
    brand: 'Bernat',
    category: 'yarn',
    price: '$13.49',
    color: "Dusk Blue",
    yarnWeight: "Super Bulky 6",
    details: "Yarn Weight: Super Bulky 6, Crochet Gauge: 7 sc and 8 rows with a 8 mm (U.S. L/11) crochet hook, Knit Gauge: 8 sts and 13 rows with a 8 mm (U.S. 11) knitting needle, Yarn Weight : 10.5 oz, Length: 220yd, Fiber: 100% polyester, Care Details: Machine wash and dry",
    description: 'Elevate your crafting projects with the luxurious Bernat Blanket Yarn. Made from a premium blend of soft and cozy polyester fibers, this yarn offers exceptional quality, comfort, and durability. A luxurious, soft and cozy yarn, Bernat Blanket is a chenille-style yarn that/s perfect for home décor projects. Its super bulky weight stitches up quickly, making it a great choice for afghans and blankets. It/s machine washable and dryable, making it easy to care for and maintain the beauty of your finished projects. You can confidently create blankets and decor items that are not only visually stunning but also practical for everyday use.',
    image: 'https://www.yarnspirations.com/cdn/shop/products/16111010911.jpg?v=1691750919&width=600',
  },
  {
    id: 51,
    name: 'Wool-Ease® Thick and Quick',
    brand: 'Lion Brand',
    author: null,
    category: 'yarn',
    price: '$8.99',
    color: "Kale/Green",
    yarnWeight: "Bulky 5",
    details: "Yarn Weight: 5 Bulky, Knit Gauge: 4 in = 9 stitches on size 13 needles, Yarn Weight : 5.3oz, Length: 106yd, Fiber: Acrylic, Wool, Care Details: Machine Wash Gentle, Tumble Dry Low",
    description: 'Explore the art of knitting with the Lion Brand Wool Ease Thick & Quick Yarn that/s ideal for beginners and features a free pattern on each label. Gift your loved ones beautifully handmade mittens, vests, slippers, scarves, hats and sweaters using the wool ease yarn. This super bulky yarn is is a perfect blend of durability and softness and has elegant stitch definition.',
    image: "https://cdn-fsly.yottaa.net/55d09df10b53443653002e6e/www.joann.com/v~4b.46a/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dw02e1b38a/images/hi-res/15/15521750_MAIN.jpg?sw=2000&sh=2000&sm=fit&yocs=7M_7S_7X_",

  },
  {
    id: 8,
    name: 'Bernat Super Value Yarn',
    brand: 'Bernat',
    category: 'yarn',
    price: '$13.49',
    color: "Berry/Red",
    yarnWeight: "Medium 4",
    details: "Yarn Weight: Medium 4, Crochet Gauge: 13 sc and 14 rows with a 5 mm (U.S. H/8) crochet hook, Knit Gauge: 18 sts and 24 rows with a 5 mm (U.S. 8) knitting needle, Yarn Weight : 7 oz, Length: 440yd, Fiber: 100% acrylic, Care Details: Machine wash and dry",
    description: 'Bernat Super Value yarn is an economical, worsted weight yarn in a huge shade range. Available in solid and multi-colored shades, from brights, to neutrals, Super Value fits the needs of any knit or crochet project. Conveniently machine washable and dryable for easy care.    ',
    image: 'https://www.yarnspirations.com/cdn/shop/products/16405300607.jpg?v=1689541721&width=600',
  },
  {
    id: 81,
    name: 'Mandala String Yarn',
    brand: 'Lion Brand',
    category: 'yarn',
    price: '$6.99',
    color: "Mixtape/Yellow/Blue [557-200CU]",
    yarnWeight: "Super Fine 1",
    details: "Yarn Weight: 1 Superfine / Fingering, Crochet Gauge: 20 sc x 26 r on G-6 (4 mm), Knit Gauge: 28 sts x 32r on #3 (3.25 mm), Yarn Weight : 3.5 oz, Length: 350yd, Fiber: 100% Acrylic, Care Details: Machine wash and dry",
    description: 'Introducing Mandala® String, the newest addition to the beloved Mandala® family of yarns. Inspired by its siblings, this CYC #1 yarn is a versatile choice for all your lacework, shawls, accessories, baby items, and garment projects. Just like its relatives, Mandala® String boasts the enchanting feature of self-striping, ensuring your creations come to life with vibrant and playful color combinations. Made from 100% Acrylic, this yarn comes in a 3.5 oz ball and offers a generous 350 yards of creative potential. Explore the world of limitless possibilities and let your imagination run wild with Mandala® String!​',
    image: 'https://www.lionbrand.com/cdn/shop/files/Sk-557-200_1200x.jpg?v=1688055165',
  },
  {
    id: 82,
    name: 'LB Collection Cotton Bamboo Linen Yarn',
    brand: 'Lion Brand',
    category: 'yarn',
    price: '$4.99',
    color: "Denim/Blue [465-109N]",
    yarnWeight: "Fine 2",
    details: "Yarn Weight: 2 Fine / Sport, Crochet Gauge: 18 sc x 24 r on E-4 (3.5 mm), Knit Gauge: 24 sts x 32 r on #4 (3.5mm), Yarn Weight : 1.75 oz, Length: 164yd, Fiber: 40% Cotton 35% Bamboo 25% Linen, Care Details: Machine wash gentle, tumble dry low",
    description: 'Enjoy three natural fibers that drape even better together! Combining the softness and drape of bamboo with the absorbency and durability of cotton and linen, our LB Collection Cotton Bamboo Linen yarn is perfect for year-round projects like clothing, shawls, and baby items. Each 50-gram ball of this fine (CYC #2) yarn contains 164 yards. Part of our line of affordable, easy-care luxury fibers, LBC Cotton Bamboo Linen is available in a gorgeous, sophisticated color palette.',
    image: 'https://www.lionbrand.com/cdn/shop/products/465-109_1200x.jpg?v=1653051402',
  },
  {
    id: 83,
    name: 'Red Heart Soft Yarn',
    brand: 'Red Heart',
    category: 'yarn',
    price: '$5.99',
    color: "Rose Blush/Red [465-109N]",
    yarnWeight: "Medium 4",
    details: "Yarn Weight: 4 Medium, Crochet Gauge: 4 x 4 (10 cm x 10 cm) 12 sc and 15 rows with a 5.5 mm (U.S. I/9) crochet hook, Knit Gauge: 4 x 4 (10 cm x 10 cm) 17 sts and 23 rows with a 5 mm (U.S. 8) knitting needle, Yarn Weight : 5 oz, Length: 256yd, Fiber: 100% acrylic, Care Details: Machine wash and dry.",
    description: 'Red Heart Soft is known for its extreme softness and beautiful drape. A special spinning process results in a silky feel to the yarn. A versatile worsted weight yarn, Soft is appropriate for all projects, from hats to throws, accessories to garments, and everything in between.',
    image: 'https://www.yarnspirations.com/cdn/shop/products/E728-9770.jpg?v=1689627145&width=600',
  },
  {
    id: 84,
    name: 'Red Heart Super Saver Yarn',
    brand: 'Red Heart',
    category: 'yarn',
    price: '$4.99',
    color: "Saffron/Yellow",
    yarnWeight: "Fine 2",
    details: "Yarn Weight: 4 Medium, Crochet Gauge: 4 x 4 (10 cm x 10 cm) 12 sc and 15 rows with a 5.5 mm (U.S. I/9) crochet hook, Knit Gauge: 4 x 4 (10 cm x 10 cm) 17 sts and 23 rows with a 5 mm (U.S. 8) knitting needle, Yarn Weight : 5 oz, Length: 256yd, Fiber: 100% acrylic, Care Details: Machine wash and dry.",
    description: 'Super Saver yarn has been a favorite among knitters and crocheters for over 30 years. This 100% acrylic worsted weight, size 4 yarn comes in over 120 beautiful colors, so you will always find the perfect color to complete your project.',
    image: 'https://www.yarnspirations.com/cdn/shop/products/E300B-0234.jpg?v=1689690459&width=600',
  },
  {
    id: 85,
    name: 'Lily Sugar n Cream Super Size Yarn',
    brand: 'Lily Sugar n Cream',
    category: 'yarn',
    price: '$4.99',
    color: "Dark Orchid/Purple",
    yarnWeight: "Medium 4",
    details: "Yarn Weight: 4 Medium, Crochet Gauge: 13 sc and 14 rows with a 5 mm (U.S. H/8) crochet hook, Knit Gauge: 20 sts and 26 rows with a 4.5 mm (U.S. 7) knitting needle, Yarn Weight : 4 oz, Length: 200yds, Fiber: 100% cotton, Care Details: Machine wash and dry.",
    description: 'Lily Sugar n Cream Super Size Cotton yarn is a natural, 100% USA-grown cotton yarn. The perfect choice for your knit and crochet home décor needs. Lily Sugar n Cream is a versatile worsted weight yarn, that’s great for small projects like dishcloths and potholders, to home décor staples like afghans! Available in a wide variety of shades, including neutrals, brights, and pastels. Conveniently machine washable and dryable for easy care.',
    image: 'https://www.yarnspirations.com/cdn/shop/products/10201818805.jpg?v=1689391043&width=600',
  },
  {
    id: 86,
    name: 'Lily Sugar n Cream The Original Yarn',
    brand: 'Lily Sugar n Cream',
    category: 'yarn',
    price: '$4.99',
    color: "Hot Orange",
    yarnWeight: "Medium 4",
    details: "Yarn Weight: 4 Medium, Crochet Gauge: 13 sc and 14 rows with a 5 mm (U.S. H/8) crochet hook, Knit Gauge: 20 sts and 26 rows with a 4.5 mm (U.S. 7) knitting needle, Yarn Weight : 3.5 oz, Length: 120yds, Fiber: 100% cotton, Care Details: Machine wash and dry.",
    description: 'Lily Sugar n Cream Cotton yarn is a natural, 100% USA-grown cotton yarn. The perfect choice for your knit and crochet home décor needs. Lily Sugar n Cream is a versatile worsted weight yarn, that’s great for small projects like dishcloths and potholders, to home décor staples like afghans! Available in a wide variety of shades, including neutrals, brights, and pastels. Conveniently machine washable and dryable for easy care.',
    image: 'https://www.yarnspirations.com/cdn/shop/products/10200101628.jpg?v=1689879025&width=600',
  },
  {
    id: 87,
    name: 'Lily Sugar n Cream Big Ball Yarn',
    brand: 'Lily Sugar n Cream',
    category: 'yarn',
    price: '$10.99',
    color: "White",
    yarnWeight: "Medium 4",
    details: "Yarn Weight: 4 Medium, Crochet Gauge: 13 sc and 14 rows with a 5 mm (U.S. H/8) crochet hook, Knit Gauge: 20 sts and 26 rows with a 4.5 mm (U.S. 7) knitting needle, Yarn Weight : 400g, Length: 710yds, Fiber: 100% cotton, Care Details: Machine wash and dry.",
    description: 'Lily Sugar n Cream Big Ball Cotton yarn is a natural, 100% USA-grown cotton yarn in a convenient super size ball. The perfect choice for your kitchen and home décor needs, and craft projects. Lily Sugar n Cream is a versatile worsted weight yarn, that’s great for small projects like dishcloths and potholders, to home décor staples like afghans! Available in a wide variety of shades, including neutrals, brights, and pastels. Conveniently machine washable and dryable for easy care.',
    image: 'https://www.yarnspirations.com/cdn/shop/products/10202727001.jpg?v=1689391016&width=600',
  },
  {
    id: 9,
    name: 'Yarn Ball Winder',
    brand: 'Darn Good Yarn',
    category: 'tools',
    color: null,
    yarnWeight: null,
    price: '$35.22',
    details: 'This yarn ball winder features easy assembly instructions and can be disassembled to make traveling easier! Never cake a skein of yarn by hand again!',
    description: "Winding yarn into a cake has never been more straightforward! Use this hand-operated winder to quickly and easily ball your yarn to keep it from getting tangled and knotted! P.S. The accents of blue make it blend in beautifully in any crafting corner, or show it off on your kitchen table or counter!",
    image: "https://cdn.shopify.com/s/files/1/1346/5473/products/1_d1181727-378b-42c8-876d-79b741f127f1.jpg?v=1675877680&width=400",
  },
  {
    id: 10,
    name: 'Purple Cosmic Ceramic Yarn Bowl',
    brand: 'The Knit Nest',
    color: null,
    yarnWeight: null,
    category: 'tools',
    price: '$30.05',
    details: 'Color: Purple Speckled Size: 5.5"W x 4"H 100% Lead-Free',
    description: 'Meet our ceramic yarn bowl - your crafty side/s new best friend! Whether you/re deep into knitting or big on crocheting, this bowl keeps your yarn neat and tangle-free.Swap yarn chaos for pure crafting bliss with this stylish ceramic bowl!',
    image: "https://cdn.shopify.com/s/files/1/1346/5473/files/CosmicDesign_1_1f82e3ea-b14a-4aad-9933-67979cfed1c7.jpg?v=1694784393&width=400",
  },
  {
    id: 91,
    name: 'Darn Good Yarn Essential Pouch',
    brand: 'Darn Good Yarn',
    author: null,
    category: 'tools',
    color: null,
    yarnWeight: null,
    price: '$8.00',
    details: 'The colorful knit stitch pattern brings a nice pop of color. All of this secured together with a black, heavy duty zipper.',
    description: "You know it as much as me-- you can never have too many little pouches to store and organize. This longer than normal pouch also is great for things like: ✏️ Pens/Pencils, 🧶 Knitting/Crochet Tools, ✂️ Random Craft Supplies (You know you have them 😂), 💄 Self-care Items",
    image: "https://www.darngoodyarn.com/cdn/shop/products/darn-good-essentials-crafting-pouch.jpg?v=1568821750&width=1800",
  },
  {
    id: 92,
    name: 'Yarn and Craft Scissors',
    brand: 'Darn Good Yarn',
    author: null,
    category: 'tools',
    color: null,
    yarnWeight: null,
    price: '$35.00',
    details: 'This pack comes with 5 different color scissors, all with a different fun shape and size. Great value and quality - also super adorable!',
    description: "The crafter's most elusive friend! Each of our yarn and craft scissors has an elegant and unique design that stands out from the pack. You'll never lose sight of them (even our tiniest pair). These shears are perfect for embroidery, needlework, and sewing, as well as your non-yarn crafting needs. They make the ideal gift or stocking stuffer for the DIY-er in your life, although it may be hard to give them up once you get a hold of them!",
    image: "https://www.darngoodyarn.com/cdn/shop/products/2_9946e01a-7945-42f0-aef1-ee0260daf80d.jpg?v=1672348126&width=1800",
  },
  {
    id: 93,
    name: 'Stitchable Sheep Buttons 3-Pack',
    brand: 'Darn Good Yarn',
    author: null,
    category: 'tools',
    color: null,
    yarnWeight: null,
    price: '$18.00',
    details: 'Material: Clay, Dimensions: 1",1", 0.25". Show off your creativity, do something good for yourself and the world and add a little bit extra sweetness to every project with Stitchable Sheep Buttons 3-Pack!',
    description: "🐑 Let Stitchable Sheep Buttons make your next project stand out and have some heart! These three handmade buttons are the perfect way to show off your trendy style. Each button is made with care and is completely washable, which means you can use them for DIY projects like adding an extra stylish accent to clothing or even home decor!",
    image: "https://www.darngoodyarn.com/cdn/shop/products/StitchableSheepButtons_3Pack.jpg?v=1568821753&width=1800",
  },
  {
    id: 94,
    name: 'The Ultimate Crochet Hook Set',
    brand: 'Darn Good Yarn',
    author: null,
    category: 'tools',
    color: null,
    yarnWeight: null,
    price: '$29.99',
    details: 'Alongside the crochet hooks, you/ll find all the accessories you need to get started: Tape Measure: A handy tape measure for accurate sizing and measurements. Darning Needles: Three large and three small darning needles for weaving in ends and finishing your projects with precision. Stitch Counter: Keep track of your progress effortlessly with the included stitch counter. Stitch Markers: Never drop a stitch again with this colorful assortment of stitch markers. Yarn Cutting Tool: A convenient yarn cutting tool ensures clean and precise cuts, saving you time and effort.',
    description: "We designed this set of eleven ergonomically designed crochet hooks to take all the pain out of your favorite craft. Made from quality materials like TPR grips and aluminum tips, these hooks are not only lead and nickel free, but are super comfortable even for those with arthritic conditions.",
    image: "https://www.darngoodyarn.com/cdn/shop/files/1_3.jpg?v=1694708692&width=1800",
  },
  {
    id: 11,
    name: 'Aluminum Crochet Hook Set',
    brand: 'Darn Good Yarn',
    color: null,
    yarnWeight: null,
    category: 'tools',
    price: '$25.00',
    details: 'Colored Aluminum Hooks Sizes: 2.0mm (B/1), 2.5mm (C/2), 3.0mm (D/3), 3.5mm (E/4), 4.0mm (G/6), 4.5mm(7), (H/8) 5.0mm (H/9), 5.5mm (I/9), 6.0mm (J/10), 6.5mm (K/10.5)Silver Tone Hooks Sizes:.50mm, .75mm, .85mm, .90mm, 1.0mm, 1.10mm, 1.40mm, 1.50mm, 1.60mm, 1.75mm, 1.80mm, 1.90mm. That/s 22 crochet hooks total! Not to mention each pack comes with a purple carrying case.',
    description: 'This crochet hook pack comes with all the hooks you/ve been wanting! Never be caught without the right hook when inspiration strikes with this expansive set. It also comes with a handy case to keep those hooks organized and portable',
    image: "https://cdn.shopify.com/s/files/1/1346/5473/products/830150F__94703.1456684527.1280.1280.jpg?v=1631032357&width=400",
  },
  {
    id: 12,
    name: 'Bamboo Interchangeable Knitting Needles',
    brand: 'Darn Good Yarn',
    color: null,
    yarnWeight: null,
    category: 'tools',
    price: '$97.99',
    details: 'Each set includes: 13 pairs of needles, 4 cable lengths, 4 end caps, 2 metal connectors, 2 key tighteners and 1 point gripper. The knitting needle case case approximately 8" x 7".',
    description: 'Never get stuck without the right needle size or cable length again, youll always be prepared for your next knitting adventure this set. Plus they come in a sturdy case which means theyre portable enough to bring with you anywhere! Let your knitting adventures begin!',
    image: "https://www.darngoodyarn.com/cdn/shop/files/6_1b2f3ddf-1b69-4636-a8fb-68581049d025.jpg?v=1688672554&width=1800",
  },
  {
    id: 13,
    name: 'Enamel Cat Donut Stitch Markers - 6 Pack',
    brand: 'Darn Good Yarn',
    color: null,
    yarnWeight: null,
    category: 'tools',
    price: '$12.00',
    details: 'Crafted with precision and love, each stitch marker features an irresistibly cute cat donut design. These little feline friends will keep you company as you knit or crochet, making your crafting time even more enjoyable.Crafted with attention to detail, these stitch markers are made with high-quality materials.',
    description: 'Introducing Darn Good Yarns 6-Pack of Cat Donut Enamel Gold Plated Stitch Markers – The Purrfect Companion for Your Knitting and Crochet Adventures! Are you a passionate yarn artist who loves adding a touch of whimsy and charm to your crafting projects? Look no further! Our Cat Donut Enamel Gold Plated Stitch Markers are here to bring a dash of feline-inspired delight to your creative endeavors.',
    image: "https://www.darngoodyarn.com/cdn/shop/files/2_2_8b119912-5b3b-4438-b4ff-47fda77e1ac9.jpg?v=1695912993&width=1800",
  },
  {
    id: 14,
    name: 'US 8/5mm Ombre Knitting Needle & Crochet Hook Bundle',
    brand: 'Darn Good Yarn',
    color: null,
    yarnWeight: null,
    category: 'tools',
    price: '$19.99',
    details: 'This bundle includes a pair of custom-made, wooden knitting needles and a crochet hook. Crafting becomes an enjoyable and beautiful experience when you work with these vibrant ombre needles. The colors shift from deep eggplant to light iridescent purple, letting you add a touch of color and shimmer to every project.',
    description: 'The wood construction makes these needles easy to use and provides an improved grip on the yarn. When youre finished crafting, proudly display your needles in their brightly colored ombre glory! Get creative with the US 8/5mm Ombre Knitting Needle & Crochet Hook Bundle and let yourself be inspired!',
    image: "https://www.darngoodyarn.com/cdn/shop/products/dgy-of-month-sub-box-1-ombre-knitting-needles-5mm-01.jpg?v=1627935515&width=1800",
  },
  {
    id: 15,
    name: 'Susan Bates Silvalume Set of 3 Crochet Hooks, U.S. G/6, H/8, J/10',
    brand: 'Susan Bates',
    color: null,
    yarnWeight: null,
    category: 'tools',
    price: '$6.49',
    details: 'This set contains three, 5 1/2" hooks, in sizes G/6 (4 mm), H/8 (5 mm) and J/10 (6mm).In-line head helps reduce wrist motion. Constructed with anodized aluminum.',
    description: 'Susan Bates Silvalume Crochet Hooks have the broadest size range within the Susan Bates family of hooks. Made of lightweight aluminum, each Silvalume hook undergoes a special anodizing process, which etches away all surface impurities. In addition, each hook is heat treated for strength and durability and polished for a velvety smooth finish. Each size is color coded so you can find the size you need at a glance. Our famous in line head helps reduce wrist motion for fatigue free crocheting and helps you maintain a more consistent gauge',
    image: "https://www.yarnspirations.com/cdn/shop/products/12193-001-1.jpg?v=1692728063&width=600",
  },
  {
    id: 16,
    name: 'Susan Bates Soft Ergonomic Crochet Hook Set, Sizes E, F, G',
    brand: 'Susan Bates',
    color: null,
    yarnWeight: null,
    category: 'tools',
    price: '$6.49',
    details: 'Crochet hook set contains three hooks in US sizes 3.75-mm F-5, 4-mm G-6, 5-mm H-8. Anodized aluminum, velvet smoothfinish, in-line crochet hook head and color coded for quick size selection. These silvalume hooks are made of lightweight aluminum',
    description: 'Designed for comfort with gently rounded tips and a long taper to make knitting easier and reduce yarn splitting, Silvalume is the most complete line of color-coded ultra-smooth aluminum crochet hooks & knitting needles to match all your yarns.',
    image: "https://www.yarnspirations.com/cdn/shop/files/12693-001.jpg?v=1690310057&width=600",
  },
]

module.exports = products;