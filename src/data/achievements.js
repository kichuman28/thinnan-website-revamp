// Import achievement images
import oneImage from '../assets/images/achievements/one.jpeg';
import twoImage from '../assets/images/achievements/two.jpeg';
import threeImage from '../assets/images/achievements/three.jpeg';
import fourImage from '../assets/images/achievements/four.jpeg';
import fiveImage from '../assets/images/achievements/five.jpeg';
import sixImage from '../assets/images/achievements/six.jpeg';
import sevenImage from '../assets/images/achievements/seven.jpg';
import eightImage from '../assets/images/achievements/eight.jpeg';
import tenImage from '../assets/images/achievements/ten.png';
import elevenImage from '../assets/images/achievements/eleven.png';
import twelveImage from '../assets/images/achievements/twelve.png';
import thirteenImage from '../assets/images/achievements/thirteen.png';
import fourteenImage from '../assets/images/achievements/fourteen.png';
import fifteenImage from '../assets/images/achievements/fifteen.png';
import sixteenImage from '../assets/images/achievements/sixteen.png';
import seventeenImage from '../assets/images/achievements/seventeen.png';
import eighteenImage from '../assets/images/achievements/eighteen.png';

// Achievement data with local images
const achievements = [
  {
    id: 18,
    title: "Featured in Talouselämä",
    description: "thinnan featured in Finland's leading business magazine, highlighting our journey building across continents.",
    longDescription: "Hot from the press, we've been featured in Talouselämä! ✨\n\nBuilding a startup across continents is as challenging as it is rewarding - some days it's code and coffee, other days it's courage and conviction. But every small step forward reminds us why we started. 💪\n\nThis feature represents not just our journey, but the story of countless founders who dare to dream big and build with purpose. Thank you to everyone who has been part of this incredible journey!",
    date: "November 2025",
    image: eighteenImage
  },
  {
    id: 17,
    title: "First Angel Investment from Cal Henderson",
    description: "Closed our first angel investment from Slack co-founder Cal Henderson, a major milestone in our journey.",
    longDescription: "Team thinnan is extremely happy to announce that we have closed our first angel investment from Cal Henderson, co-founder of Slack! 🎉\n\nCal has been advising thinnan for the past year while we have been building thinnan, pouring our hearts, craft, and vision into creating an entirely new category of social media designed for real-life experiences around food.\n\nThis investment is more than funding - it's validation from someone who has built one of the world's most successful communication platforms. Cal's experience in creating tools that bring people together aligns perfectly with our mission at thinnan.\n\nWe're grateful for Cal's continued belief in our vision and excited for what comes next!",
    date: "November 2025",
    image: seventeenImage
  },
  {
    id: 16,
    title: "Meeting Indian Ambassador to Finland",
    description: "Honored to meet H.E. Hemant Kotalwar and reflect on building thinnan at the intersection of two worlds.",
    longDescription: "It's not every day that you get to share your startup journey with your home country's ambassador, and it's even more rare to do so while building bridges between two startup ecosystems that shaped who we are.\n\nWe were deeply honored to meet H.E. Hemant Kotalwar, Ambassador of India to Finland, during his visit to Maria 01 - and grateful for the space to reflect on how thinnan was born at the intersection of both worlds.\n\n🇮🇳 India taught us hustle, growth, and ambition.\n🇫🇮 Finland gave us community, long-term vision, and the space to build with care.\n\nWe're proud to be part of the Northern Light Accelerator, and to represent the shared values of both nations as we build thinnan into a product that brings people together around food - across borders!\n\nThank you Maria 01 for creating these spaces of real connection. 💫",
    date: "November 2025",
    image: sixteenImage
  },
  {
    id: 15,
    title: "Maria 01 NLA Acceptance",
    description: "Accepted into the prestigious Maria 01 Northern Light Accelerator Program for Fall 2025.",
    longDescription: "Today, we're thrilled to share a \"YES\"! 🎉\n\nWe're excited to announce that thinnan has been accepted into the Maria 01 Northern Light Accelerator Program, kicking off this fall. We can't wait to grow, learn, and keep building thinnan alongside incredible founders and mentors.\n\nAs part of the program, we'll be:\n• Validating our product with real users\n• Gaining traction in local markets\n• Preparing for sustainable growth across Europe\n\nThe NLA program represents a turning point in our journey. With access to world-class mentorship, a vibrant startup community, and the resources to scale, we're positioned to take thinnan to the next level.\n\nThis is a big step forward and we're just getting started! Stay tuned for more stories from the journey.",
    date: "September 2025",
    image: fifteenImage
  },
  {
    id: 14,
    title: "Vishnu Speaks at Maria 01 NEXT Festival",
    description: "Co-founder Vishnu joined a panel on the first-time founder journey at Maria 01 NEXT Startup Festival.",
    longDescription: "On Wednesday, I had the opportunity to be part of the panel discussion on the 'first time founder' journey at the Maria 01 NEXT Startup Festival.\n\nAlong with Anne Särkilahti (Hytrade) and Mari Lahti (Ferrivia), we discussed the trajectory of first-time founders from three very different perspectives. A common factor to take away was that all of us have had great co-founders to take on the journey together, in highs and lows.\n\nKey insights from the panel:\n• The importance of co-founder dynamics\n• Navigating uncertainty as a first-time founder\n• Building resilience through challenges\n• Learning to celebrate small wins\n\nThank you Sofiia Vasileva and Maria 01 for hosting and all the great questions :)\n\n*When it comes to thinnan, I want to thank all of you who have supported us in the journey, from the start to where we are now.",
    date: "September 2025",
    image: fourteenImage
  },
  {
    id: 13,
    title: "Selected for Slush 100",
    description: "Out of thousands of startups globally, thinnan selected for the world's most coveted startup competition.",
    longDescription: "We've got news. Big news!! 🎉\n\nthinnan has been selected for Slush 100 - the world's most coveted startup competition!!\n\nOut of thousands of startups globally, only 100 make it through. And we're proud (and still pinching ourselves) to be one of them.\n\nThis moment means the world to us, not just for the stages ahead, but for every step we've taken to get here! The selection process was intense, and being chosen validates the countless hours of work, iteration, and belief in our vision.\n\nWhat Slush 100 means for thinnan:\n• Global exposure to investors and partners\n• Access to world-class mentorship\n• Opportunity to pitch on the main stage\n• Connection with the top 100 startups worldwide\n\nThank you for being part of this journey. 💗\n\nWe're building thinnan, a social media for bringing people together in real life around food - and now, we take it to Slush!! 🥳",
    date: "September 2025",
    image: thirteenImage
  },
  {
    id: 12,
    title: "Hopohopo.io Investor Bootcamp",
    description: "Team participated in intensive investor bootcamp in Berlin, refining pitch and fundraising strategy.",
    longDescription: "The thinnan team was part of the Hopohopo.io Investor Bootcamp in Berlin - an intensive week of learning, networking, and preparing for our fundraising journey.\n\nThe bootcamp provided invaluable insights into:\n• Crafting the perfect investor pitch\n• Understanding what investors look for\n• Building relationships with VCs and angels\n• Navigating term sheets and valuations\n• Scaling strategies for European markets\n\nBerlin's vibrant startup ecosystem offered the perfect backdrop for this experience. We connected with fellow founders facing similar challenges and learned from those who've successfully navigated the fundraising journey.\n\nThe knowledge and connections gained here will be instrumental as we continue to grow thinnan and prepare for our next funding round.",
    date: "July 2025",
    image: twelveImage
  },
  {
    id: 11,
    title: "Migrant.AI Pitch Competition",
    description: "Pitched thinnan's vision of connecting diverse communities through food at Migrant.AI event.",
    longDescription: "We had the privilege of pitching at Migrant.AI's startup competition, where we shared our vision of using food as a bridge to connect diverse communities.\n\nAt thinnan, we're deeply aware of the challenges immigrants and expats face when building community in a new country. Food is universal - it transcends language barriers and cultural differences. It's the perfect medium for creating meaningful connections.\n\nOur pitch highlighted:\n• How thinnan helps newcomers feel at home\n• The power of shared meals in building trust\n• Creating safe spaces for cultural exchange\n• Turning strangers into friends, one meal at a time\n\nThe response was incredibly positive, with many sharing their own stories of finding community through food. These conversations remind us why we're building thinnan - to make everyone feel like they belong, no matter where they're from.",
    date: "July 2025",
    image: elevenImage
  },
  {
    id: 10,
    title: "Maria 01 NOW Pitching Competition",
    description: "Competed in Maria 01's NOW pitching competition, showcasing thinnan to investors and mentors.",
    longDescription: "We took the stage at Maria 01's NOW pitching competition, presenting thinnan's vision to a room full of investors, mentors, and fellow founders.\n\nThe NOW competition is known for its high standards and quality feedback. Standing on that stage, sharing our story of building a new category of social media centered around real-life food experiences, was both nerve-wracking and exhilarating.\n\nKey highlights from the pitch:\n• Our unique approach to social networking\n• Early traction and user engagement metrics\n• Vision for scaling across European markets\n• The team behind thinnan and our combined strengths\n\nThe experience pushed us to refine our messaging and better articulate our value proposition. The feedback we received has been instrumental in shaping our go-to-market strategy.\n\nThis is just the beginning - we're building something special, and we're grateful for every opportunity to share our story!",
    date: "June 2025",
    image: tenImage
  },
  {
    id: 8,
    title: "Featured by Location Innovation Hub",
    description: "thinnan recognized by LIH for innovative use of location data to connect communities through food.",
    longDescription: "We're proud to have thinnan featured by Location Innovation Hub. Being an early-stage startup, it means a lot to find partners who believe in your vision. LIH has done just that — not only by offering access to insightful data and information that helps us grow, but by connecting us with an incredible network of people and opportunities. Through this collaboration, we've been able to connect with Gispo, participate in the Geospatial Challenge Camp run by Aalto University and University of Turku, and tap into an ecosystem of innovation. We're currently working on refining thinnan based on user feedback and preparing to launch in a new city. The data and insight we've gained through LIH will continue to guide us through this next exciting phase. The LIH team shared: 'We're excited to help our clients to expand into global markets! thinnan's mission is to bring people together through a social network centered around food and real-life personal connections. The company turned to Location Innovation Hub to get a better understanding on how to use location data more effectively which helped their efforts to expand beyond Finland.'",
    date: "April 2025",
    image: sevenImage
  },
  {
    id: 7,
    title: "Design Interrupted Panel Discussion",
    description: "Our co-founder Annu Mathew joined a panel on 'Climate Breakdown' with Indy Johar, Marco Steinberg and Hella Hernberg.",
    longDescription: "Our co-founder Annu Mathew recently shared the stage of 'Design Interrupted' with Indy Johar, Marco Steinberg and Hella Hernberg. A thought-provoking session on 'Climate Breakdown' emphasised the role every individual has to play in the sustenance of the planet. The panel discussion explored design not just as a tool for problem-solving, but as a way of thinking - a lens through which we navigate complexity and reimagine possibilities. Annu reflected: 'As a fresh design graduate, but also someone who has already worked in the field, stepping into this space was both humbling and exhilarating. Indy challenged us with big questions: What is design? What does it mean to be a designer in today's world?' At thinnan, we strive our best to practice a way of thinking based on the principles of design, focusing on social sustainability and social capital through the medium of food.",
    date: "April 2025",
    image: eightImage
  },
  {
    id: 6,
    title: "Innovation Lab Panel Discussion",
    description: "Our co-founder Vishnu Aravind joined a panel on sustainable business and entrepreneurship.",
    longDescription: "Last week, our co-founder Vishnu Aravind took the stage along with Bahez Karim, Olivia Matinlauri & Roberta Robin Gilardi to discuss insights on sustainable business and entrepreneurship. Vishnu highlighted that 'sustainability is indeed a very hot topic, so hot that it is often misunderstood and misinformed! When it comes to thinnan, we are focusing on social sustainability. We believe that while the world focused immensely over environmental sustainability, the social sustainability factor was left behind.' The panel was hosted by START Helsinki and the Chamber of Commerce Finland-Switzerland as part of the Innovation Lab: From Ideas to Impact event, providing a great experience for learning from fellow startup journeys.",
    date: "March 2025",
    image: sixImage
  },
  {
    id: 5,
    title: "Founders Live Helsinki Winner",
    description: "thinnan wins Founders Live Helsinki, validating our mission to connect people through food.",
    longDescription: "We're thrilled to share that thinnan has won Founders Live Helsinki! This recognition strengthens our mission to foster real connections around the table. In a world where we're more 'connected' than ever yet drifting apart, thinnan offers a way to bring back the magic of community to food—a social network that brings people together over home-cooked meals. Because food isn't just fuel; it's a chance to connect, to share, to belong. We're transforming solo food rituals into meaningful community experiences.",
    date: "December 2024",
    image: fiveImage
  },
  {
    id: 4,
    title: "Founders Town at Aalto University",
    description: "Shared our journey with 200+ attendees, gaining valuable user validation and insights.",
    longDescription: "Last week, thinnan had the incredible opportunity to attend Founders Town at Aalto University, where we shared our journey with 200+ attendees. The interest and enthusiasm we received reaffirmed our mission to connect communities through shared meals. This experience provided invaluable user validation, with each conversation adding new perspectives that fuel our drive. The support from everyone who took the time to listen, ask questions, and express interest motivates us to continue building and growing this community.",
    date: "December 2024",
    image: fourImage
  },
  {
    id: 3,
    title: "Cal Henderson Joins Advisory Board",
    description: "Co-founder of Slack and former Head of Engineering at Flickr joins thinnan advisory board.",
    longDescription: "We are thrilled to announce that Cal Henderson, co-founder of Slack and former Head of Engineering at Flickr, has joined thinnan advisory board! This significant addition to our team brings invaluable expertise in scaling technology platforms and building community-driven products. Cal joins Loredana Moimas, who has been an incredible advisor on our board for the past five months, providing comprehensive support and continuing to guide and empower us in making the right choices as we grow The Social Food Network.",
    date: "January 2025",
    image: threeImage
  },
  {
    id: 2,
    title: "Slush 2024 Showcase",
    description: "thinnan showcased at Slush 2024 as The Social Food Network, connecting people through home-prepped meals.",
    longDescription: "We proudly represented thinnan at Slush 2024 in Helsinki, pitching our vision for The Social Food Network to the startup community. With our shameless, fearless, and non-hesitant approach, we shared how thinnan brings friends together over spontaneous, home-prepped meals. Beyond just food, we emphasized our platform's focus on connection, community, and shared experiences. The event provided valuable networking opportunities and increased visibility for our growing social food platform.",
    date: "January 2025",
    image: twoImage
  },
  {
    id: 1,
    title: "1,000 Users Milestone",
    description: "thinnan crossed 1,000 users in just 4 months since launch.",
    longDescription: "As first-time founders, we started from zero and reached this incredible milestone at an exciting pace: Zero to One in 1 day, One to Hundred in the 2nd month, and Hundred to Thousand in the 4th month. This milestone represents more than numbers; it signifies communities coming together, cultural exchange, and authentic connections over food. We're grateful for the support and love shown by each user as we continue to grow.",
    date: "December 2024",
    image: oneImage
  }
];

export default achievements; 