// import achievement images
import oneimage from '../assets/images/achievements/one.jpeg';
import twoimage from '../assets/images/achievements/two.jpeg';
import threeimage from '../assets/images/achievements/three.jpeg';
import fourimage from '../assets/images/achievements/four.jpeg';
import fiveimage from '../assets/images/achievements/five.jpeg';
import siximage from '../assets/images/achievements/six.jpeg';
import sevenimage from '../assets/images/achievements/seven.jpg';
import eightimage from '../assets/images/achievements/eight.jpeg';
import tenimage from '../assets/images/achievements/ten.png';
import elevenimage from '../assets/images/achievements/eleven.png';
import twelveimage from '../assets/images/achievements/twelve.png';
import thirteenimage from '../assets/images/achievements/thirteen.png';
import fourteenimage from '../assets/images/achievements/fourteen.png';
import fifteenimage from '../assets/images/achievements/fifteen.png';
import sixteenimage from '../assets/images/achievements/sixteen.png';
import seventeenimage from '../assets/images/achievements/seventeen.png';
import eighteenimage from '../assets/images/achievements/eighteen.png';

// achievement data with local images
const achievements = [
  {
    id: 18,
    title: "featured in talouselämä",
    description: "thinnan featured in finland's leading business magazine, highlighting our journey building across continents.",
    longDescription: "hot from the press, we've been featured in talouselämä! ✨\n\nbuilding a startup across continents is as challenging as it is rewarding - some days it's code and coffee, other days it's courage and conviction. but every small step forward reminds us why we started. 💪\n\nthis feature represents not just our journey, but the story of countless founders who dare to dream big and build with purpose. thank you to everyone who has been part of this incredible journey!",
    date: "november 2025",
    image: eighteenimage
  },
  {
    id: 17,
    title: "first angel investment from cal henderson",
    description: "closed our first angel investment from slack co-founder cal henderson, a major milestone in our journey.",
    longDescription: "team thinnan is extremely happy to announce that we have closed our first angel investment from cal henderson, co-founder of slack! 🎉\n\ncal has been advising thinnan for the past year while we have been building thinnan, pouring our hearts, craft, and vision into creating an entirely new category of social media designed for real-life experiences around food.\n\nthis investment is more than funding - it's validation from someone who has built one of the world's most successful communication platforms. cal's experience in creating tools that bring people together aligns perfectly with our mission at thinnan.\n\nwe're grateful for cal's continued belief in our vision and excited for what comes next!",
    date: "november 2025",
    image: seventeenimage
  },
  {
    id: 16,
    title: "meeting indian ambassador to finland",
    description: "honored to meet h.e. hemant kotalwar and reflect on building thinnan at the intersection of two worlds.",
    longDescription: "it's not every day that you get to share your startup journey with your home country's ambassador, and it's even more rare to do so while building bridges between two startup ecosystems that shaped who we are.\n\nwe were deeply honored to meet h.e. hemant kotalwar, ambassador of india to finland, during his visit to maria 01 - and grateful for the space to reflect on how thinnan was born at the intersection of both worlds.\n\n🇮🇳 india taught us hustle, growth, and ambition.\n🇫🇮 finland gave us community, long-term vision, and the space to build with care.\n\nwe're proud to be part of the northern light accelerator, and to represent the shared values of both nations as we build thinnan into a product that brings people together around food - across borders!\n\nthank you maria 01 for creating these spaces of real connection. 💫",
    date: "november 2025",
    image: sixteenimage
  },
  {
    id: 15,
    title: "maria 01 nla acceptance",
    description: "accepted into the prestigious maria 01 northern light accelerator program for fall 2025.",
    longDescription: "today, we're thrilled to share a \"yes\"! 🎉\n\nwe're excited to announce that thinnan has been accepted into the maria 01 northern light accelerator program, kicking off this fall. we can't wait to grow, learn, and keep building thinnan alongside incredible founders and mentors.\n\nas part of the program, we'll be:\n• validating our product with real users\n• gaining traction in local markets\n• preparing for sustainable growth across europe\n\nthe nla program represents a turning point in our journey. with access to world-class mentorship, a vibrant startup community, and the resources to scale, we're positioned to take thinnan to the next level.\n\nthis is a big step forward and we're just getting started! stay tuned for more stories from the journey.",
    date: "september 2025",
    image: fifteenimage
  },
  {
    id: 14,
    title: "vishnu speaks at maria 01 next festival",
    description: "co-founder vishnu joined a panel on the first-time founder journey at maria 01 next startup festival.",
    longDescription: "on wednesday, i had the opportunity to be part of the panel discussion on the 'first time founder' journey at the maria 01 next startup festival.\n\nalong with anne särkilahti (hytrade) and mari lahti (ferrivia), we discussed the trajectory of first-time founders from three very different perspectives. a common factor to take away was that all of us have had great co-founders to take on the journey together, in highs and lows.\n\nkey insights from the panel:\n• the importance of co-founder dynamics\n• navigating uncertainty as a first-time founder\n• building resilience through challenges\n• learning to celebrate small wins\n\nthank you sofiia vasileva and maria 01 for hosting and all the great questions :)\n\n*when it comes to thinnan, i want to thank all of you who have supported us in the journey, from the start to where we are now.",
    date: "september 2025",
    image: fourteenimage
  },
  {
    id: 13,
    title: "selected for slush 100",
    description: "out of thousands of startups globally, thinnan selected for the world's most coveted startup competition.",
    longDescription: "we've got news. big news!! 🎉\n\nthinnan has been selected for slush 100 - the world's most coveted startup competition!!\n\nout of thousands of startups globally, only 100 make it through. and we're proud (and still pinching ourselves) to be one of them.\n\nthis moment means the world to us, not just for the stages ahead, but for every step we've taken to get here! the selection process was intense, and being chosen validates the countless hours of work, iteration, and belief in our vision.\n\nwhat slush 100 means for thinnan:\n• global exposure to investors and partners\n• access to world-class mentorship\n• opportunity to pitch on the main stage\n• connection with the top 100 startups worldwide\n\nthank you for being part of this journey. 💗\n\nwe're building thinnan, a social media for bringing people together in real life around food - and now, we take it to slush!! 🥳",
    date: "september 2025",
    image: thirteenimage
  },
  {
    id: 12,
    title: "hopohopo.io investor bootcamp",
    description: "team participated in intensive investor bootcamp in berlin, refining pitch and fundraising strategy.",
    longDescription: "the thinnan team was part of the hopohopo.io investor bootcamp in berlin - an intensive week of learning, networking, and preparing for our fundraising journey.\n\nthe bootcamp provided invaluable insights into:\n• crafting the perfect investor pitch\n• understanding what investors look for\n• building relationships with vcs and angels\n• navigating term sheets and valuations\n• scaling strategies for european markets\n\nberlin's vibrant startup ecosystem offered the perfect backdrop for this experience. we connected with fellow founders facing similar challenges and learned from those who've successfully navigated the fundraising journey.\n\nthe knowledge and connections gained here will be instrumental as we continue to grow thinnan and prepare for our next funding round.",
    date: "july 2025",
    image: twelveimage
  },
  {
    id: 11,
    title: "migrant.ai pitch event",
    description: "pitched thinnan's vision of connecting diverse communities through food at migrant.ai event.",
    longDescription: "we had the privilege of pitching at migrant.ai's startup competition, where we shared our vision of using food as a bridge to connect diverse communities.\n\nat thinnan, we're deeply aware of the challenges immigrants and expats face when building community in a new country. food is universal - it transcends language barriers and cultural differences. it's the perfect medium for creating meaningful connections.\n\nour pitch highlighted:\n• how thinnan helps newcomers feel at home\n• the power of shared meals in building trust\n• creating safe spaces for cultural exchange\n• turning strangers into friends, one meal at a time\n\nthe response was incredibly positive, with many sharing their own stories of finding community through food. these conversations remind us why we're building thinnan - to make everyone feel like they belong, no matter where they're from.",
    date: "july 2025",
    image: elevenimage
  },
  {
    id: 10,
    title: "maria 01 now pitching competition",
    description: "competed in maria 01's now pitching competition, showcasing thinnan to investors and mentors.",
    longDescription: "we took the stage at maria 01's now pitching competition, presenting thinnan's vision to a room full of investors, mentors, and fellow founders.\n\nthe now competition is known for its high standards and quality feedback. standing on that stage, sharing our story of building a new category of social media centered around real-life food experiences, was both nerve-wracking and exhilarating.\n\nkey highlights from the pitch:\n• our unique approach to social networking\n• early traction and user engagement metrics\n• vision for scaling across european markets\n• the team behind thinnan and our combined strengths\n\nthe experience pushed us to refine our messaging and better articulate our value proposition. the feedback we received has been instrumental in shaping our go-to-market strategy.\n\nthis is just the beginning - we're building something special, and we're grateful for every opportunity to share our story!",
    date: "june 2025",
    image: tenimage
  },
  {
    id: 8,
    title: "featured by location innovation hub",
    description: "thinnan recognized by lih for innovative use of location data to connect communities through food.",
    longDescription: "we're proud to have thinnan featured by location innovation hub. being an early-stage startup, it means a lot to find partners who believe in your vision. lih has done just that — not only by offering access to insightful data and information that helps us grow, but by connecting us with an incredible network of people and opportunities. through this collaboration, we've been able to connect with gispo, participate in the geospatial challenge camp run by aalto university and university of turku, and tap into an ecosystem of innovation. we're currently working on refining thinnan based on user feedback and preparing to launch in a new city. the data and insight we've gained through lih will continue to guide us through this next exciting phase. the lih team shared: 'we're excited to help our clients to expand into global markets! thinnan's mission is to bring people together through a social network centered around food and real-life personal connections. the company turned to location innovation hub to get a better understanding on how to use location data more effectively which helped their efforts to expand beyond finland.'",
    date: "april 2025",
    image: sevenimage
  },
  {
    id: 7,
    title: "design interrupted panel discussion",
    description: "our co-founder annu mathew joined a panel on 'climate breakdown' with indy johar, marco steinberg and hella hernberg.",
    longDescription: "our co-founder annu mathew recently shared the stage of 'design interrupted' with indy johar, marco steinberg and hella hernberg. a thought-provoking session on 'climate breakdown' emphasised the role every individual has to play in the sustenance of the planet. the panel discussion explored design not just as a tool for problem-solving, but as a way of thinking - a lens through which we navigate complexity and reimagine possibilities. annu reflected: 'as a fresh design graduate, but also someone who has already worked in the field, stepping into this space was both humbling and exhilarating. indy challenged us with big questions: what is design? what does it mean to be a designer in today's world?' at thinnan, we strive our best to practice a way of thinking based on the principles of design, focusing on social sustainability and social capital through the medium of food.",
    date: "april 2025",
    image: eightimage
  },
  {
    id: 6,
    title: "innovation lab panel discussion",
    description: "our co-founder vishnu aravind joined a panel on sustainable business and entrepreneurship.",
    longDescription: "last week, our co-founder vishnu aravind took the stage along with bahez karim, olivia matinlauri & roberta robin gilardi to discuss insights on sustainable business and entrepreneurship. vishnu highlighted that 'sustainability is indeed a very hot topic, so hot that it is often misunderstood and misinformed! when it comes to thinnan, we are focusing on social sustainability. we believe that while the world focused immensely over environmental sustainability, the social sustainability factor was left behind.' the panel was hosted by start helsinki and the chamber of commerce finland-switzerland as part of the innovation lab: from ideas to impact event, providing a great experience for learning from fellow startup journeys.",
    date: "march 2025",
    image: siximage
  },
  {
    id: 5,
    title: "founders live helsinki winner",
    description: "thinnan wins founders live helsinki, validating our mission to connect people through food.",
    longDescription: "we're thrilled to share that thinnan has won founders live helsinki! this recognition strengthens our mission to foster real connections around the table. in a world where we're more 'connected' than ever yet drifting apart, thinnan offers a way to bring back the magic of community to food—a social network that brings people together over home-cooked meals. because food isn't just fuel; it's a chance to connect, to share, to belong. we're transforming solo food rituals into meaningful community experiences.",
    date: "december 2024",
    image: fiveimage
  },
  {
    id: 4,
    title: "founders town at aalto university",
    description: "shared our journey with 200+ attendees, gaining valuable user validation and insights.",
    longDescription: "last week, thinnan had the incredible opportunity to attend founders town at aalto university, where we shared our journey with 200+ attendees. the interest and enthusiasm we received reaffirmed our mission to connect communities through shared meals. this experience provided invaluable user validation, with each conversation adding new perspectives that fuel our drive. the support from everyone who took the time to listen, ask questions, and express interest motivates us to continue building and growing this community.",
    date: "december 2024",
    image: fourimage
  },
  {
    id: 3,
    title: "cal henderson joins advisory board",
    description: "co-founder of slack and former head of engineering at flickr joins thinnan advisory board.",
    longDescription: "we are thrilled to announce that cal henderson, co-founder of slack and former head of engineering at flickr, has joined thinnan advisory board! this significant addition to our team brings invaluable expertise in scaling technology platforms and building community-driven products. cal joins loredana moimas, who has been an incredible advisor on our board for the past five months, providing comprehensive support and continuing to guide and empower us in making the right choices as we grow the social food network.",
    date: "january 2025",
    image: threeimage
  },
  {
    id: 2,
    title: "slush 2024 showcase",
    description: "thinnan showcased at slush 2024 as the social food network, connecting people through home-prepped meals.",
    longDescription: "we proudly represented thinnan at slush 2024 in helsinki, pitching our vision for the social food network to the startup community. with our shameless, fearless, and non-hesitant approach, we shared how thinnan brings friends together over spontaneous, home-prepped meals. beyond just food, we emphasized our platform's focus on connection, community, and shared experiences. the event provided valuable networking opportunities and increased visibility for our growing social food platform.",
    date: "january 2025",
    image: twoimage
  },
  {
    id: 1,
    title: "1,000 users milestone",
    description: "thinnan crossed 1,000 users in just 4 months since launch.",
    longDescription: "as first-time founders, we started from zero and reached this incredible milestone at an exciting pace: zero to one in 1 day, one to hundred in the 2nd month, and hundred to thousand in the 4th month. this milestone represents more than numbers; it signifies communities coming together, cultural exchange, and authentic connections over food. we're grateful for the support and love shown by each user as we continue to grow.",
    date: "december 2024",
    image: oneimage
  }
];

export default achievements; 