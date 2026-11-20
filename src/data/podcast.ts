// DoGood Insider podcast: episode data copied from the live site (dogoodagency.co/dogood-insider and /podcast/<slug>).
// Order = live index order. Durations, titles, intros, summaries, chapters and keywords are live copy.
// youtubeId: the episode's own YouTube video (from its live YouTube link). null = video unavailable on YouTube.
export interface Episode {
  slug: string; liveSlug: string; title: string; subtitle: string; cardTitle: string; cardSubtitle: string;
  duration: string; metaTitle: string; metaDescription: string; youtubeId: string | null; image: string;
  links: { apple?: string; spotify?: string; amazon?: string; youtube?: string };
  guestIntro: string[]; summary: string[]; chapters: string[]; keywords: string[];
}
export const SHOW_LINKS = {
  apple: "https://podcasts.apple.com/us/podcast/dogood-insider-raw-journeys-from-start-up-founders-to-scale-up-ceos-with-seb-wichmann/id1786906519",
  spotify: "https://open.spotify.com/show/1vlOQvxBxc6CmDp7BWAR4K?si=178f1d9e0e5543fa",
  amazon: "https://music.amazon.com/podcasts/8a575c58-a94c-4707-9173-e2e42d17bbb5/dogood-insider---raw-journeys-from-start-up-founders-to-scale-up-ceos",
  youtube: "https://www.youtube.com/@RawStoriesOfDoGoodCultures/podcasts",
};
export const episodes: Episode[] = [
  {
    "slug": "decision-making-in-business",
    "liveSlug": "decision-making-in-business",
    "title": "Decision Making in Business",
    "subtitle": "How CEOs Build a Culture of Accountability",
    "cardTitle": "Decision Making in Business",
    "cardSubtitle": "How CEOs Build a Culture of Accountability",
    "duration": "43:58",
    "metaTitle": "Succeeding the founder: Titan CEO Paul Reitz",
    "metaDescription": "Paul Reitz took over from Titan International's founder. He talks with Seb Wichmann about trust, accountability and owning decisions across 8,000 people.",
    "youtubeId": "Orst3L-YeW0",
    "image": "/media/podcast/ep-decision-making-in-business",
    "links": {
      "amazon": "https://music.amazon.com/podcasts/8a575c58-a94c-4707-9173-e2e42d17bbb5/episodes/3223e2dd-e735-4408-be82-0929973eae4e/dogood-insider---raw-stories-from-culture-first-ceos-people-leaders-decision-making-in-business-how-ceos-build-a-culture-of-accountability",
      "spotify": "https://open.spotify.com/episode/0S1FvZEwnxhRwdwB4oP9lL?si=n9IOUpiTRv6NmenKYZqKrA",
      "apple": "https://podcasts.apple.com/us/podcast/decision-making-in-business-how-ceos-build-a/id1786906519?i=1000728173011",
      "youtube": "https://youtu.be/Orst3L-YeW0"
    },
    "guestIntro": [
      "Paul Reitz, CEO of Titan International — a company operating across six business units and over 8,000 employees worldwide in the agriculture, mining, and construction sectors. He leads through complexity, maintaining nimbleness at scale, and building a culture where trust, clarity, and tough conversations are normalized.",
      "Paul stepped into the CEO role following the founder and has spent over 15 years helping reshape Titan’s leadership culture — not by controlling outcomes, but by empowering better decision-making across the board."
    ],
    "summary": [
      "In this conversation, Seb Wichmann interviews Paul Reitz, CEO of Titan International, focusing on the importance of building a culture of trust and accountability within organizations. Paul emphasizes the significance of decision-making processes over mere results, advocating for a culture where employees feel empowered to own their decisions. The discussion also highlights how the visibility of Titan's products contributes to a strong company culture, motivating employees through pride in their work.",
      "Paul shares insights on creating ownership and accountability among teams, and the necessity of collaboration in defining company values. The conversation concludes with a commitment to redefining Titan's cultural framework collaboratively, ensuring that it resonates with all employees."
    ],
    "chapters": [
      "Introduction to Decision Making in Business",
      "Why Decision Making Shapes Workplace Culture",
      "High-Impact CEO Insights on Leadership Accountability",
      "Balancing Data and Human Insight in Decisions",
      "Common Pitfalls in Organizational Decision Processes",
      "Strategies for Improving Decision Making in Business",
      "Building a Culture of Accountability Across Teams",
      "Practical Frameworks for Consistent Leadership Decisions",
      "Aligning Team Goals with Organizational Values",
      "Closing Thoughts: Resilient Teams and Transparent Leadership",
      "End & Key Takeaways"
    ],
    "keywords": [
      "Titan International",
      "accountability",
      "business strategy",
      "company culture",
      "corporate values",
      "decision-making",
      "employee engagement",
      "leadership",
      "organizational behavior",
      "trust"
    ]
  },
  {
    "slug": "culture-eats-strategy",
    "liveSlug": "culture-eats-strategy",
    "title": "Culture Eats Strategy",
    "subtitle": "Building Tomorrow's SMEs on Today's Values Toward a Human-First Culture",
    "cardTitle": "Culture Eats Strategy",
    "cardSubtitle": "Building Tomorrow's SMEs on Today's Values Toward a Human-First Culture",
    "duration": "44:59",
    "metaTitle": "Christina Luconi: from Rapid7 to founder",
    "metaDescription": "Christina Luconi helped grow Rapid7 from 75 to 2,500 people over 14 years, then started her own business. Why culture is the foundation for growth.",
    "youtubeId": "ZG2dLNxx3QQ",
    "image": "/media/podcast/ep-culture-eats-strategy",
    "links": {
      "amazon": "https://music.amazon.com/podcasts/8a575c58-a94c-4707-9173-e2e42d17bbb5/episodes/976a053c-c2c0-46a3-bff3-5337c1427b61/dogood-insider---raw-journeys-from-start-up-founders-to-scale-up-ceos-culture-eats-strategy-building-tomorrow's-smes-on-today's-values-toward-a-human-first-culture",
      "spotify": "https://open.spotify.com/episode/1L000fzwGxdPviTR1wCSLs?si=5021d1eae7ad4a3f",
      "apple": "https://podcasts.apple.com/us/podcast/culture-eats-strategy-building-tomorrows-smes-on-todays/id1786906519?i=1000710307176",
      "youtube": "https://www.youtube.com/watch?v=ZG2dLNxx3QQ"
    },
    "guestIntro": [
      "Christina stands at the intersection of scale and soul, having masterfully navigated Rapid7's evolution from a 75-person startup to a 2,500-strong industry leader over 14 years. But her story isn't just about numbers – it's about understanding that a company's culture is its foundation, not its afterthought. Over the years, Christina gained a profound perspective on the true impact of workplace culture in small-medium enterprises and beyond, leading her to launch her own consulting venture focused on helping companies build cultural foundations that withstand the tests of scale.",
      "From preventing cultural erosion during rapid expansion to creating resilient hybrid teams, Christina offers a unique blend of battle-tested experience and forward-thinking leadership principles. Her approach challenges the conventional wisdom that companies must choose between rapid growth and cultural integrity."
    ],
    "summary": [
      "In this conversation, Seb Wichmann and Christina Luconi discuss the critical role of company culture in organizational success. Christina shares her journey from Rapid7 to launching her consulting business, emphasizing the importance of building a strong culture as a foundation for growth. They explore the evolution of culture in the workplace, the challenges leaders face in prioritizing culture, and the distinction between a culture-first approach versus a people-first mindset. Christina highlights the need for intentionality in defining and operationalizing culture to create a thriving work environment. In this conversation, Christina Luconi and Seb Wichmann delve into the importance of core values in shaping company culture. They discuss how to assess and operationalize these values, the critical role of leadership in fostering a strong culture, and the need for alignment between stated values and actual behaviors. Christina shares practical steps for defining values, ensuring their relevance, and creating a cohesive culture that resonates with both employees and customers. The discussion highlights innovative approaches to nurturing culture, emphasizing that it's not just about perks but about creating meaningful experiences."
    ],
    "chapters": [
      "Introduction and Personal Updates",
      "The Importance of Company Culture",
      "Defining Culture and Its Evolution",
      "Challenges in Building a Strong Culture",
      "Culture First vs. People First",
      "Creating a Lasting Cultural Impact",
      "Understanding and Operationalizing Core Values",
      "The Role of Leadership in Culture",
      "Defining and Aligning Values",
      "Assessing Relevance of Core Values",
      "Creating a Cohesive Company Culture",
      "Innovative Approaches to Nurturing Culture"
    ],
    "keywords": [
      "alignment",
      "collaboration",
      "company culture",
      "consulting",
      "core values",
      "cultural evolution",
      "cultural fit",
      "culture first",
      "employee engagement",
      "employee experience",
      "hybrid teams",
      "leadership",
      "organizational behavior",
      "organizational growth",
      "relevance",
      "remote work",
      "teamwork",
      "workplace culture"
    ]
  },
  {
    "slug": "building-tomorrows-culture",
    "liveSlug": "building-tomorrow%E2%80%99s-culture",
    "title": "Building Tomorrow’s Culture",
    "subtitle": "Daniel Marashlian on Managing SME Culture Amidst Rapid Growth Surge",
    "cardTitle": "Building Tomorrow’s Culture",
    "cardSubtitle": "Daniel Marashlian on Managing SME Culture Amidst Rapid Growth Surge",
    "duration": "36:08",
    "metaTitle": "Drata's co-founder on growth and acquisition",
    "metaDescription": "Drata co-founder Daniel Marashlian on doubling from 300 to 600 people in 12 months and integrating an acquisition without losing the culture.",
    "youtubeId": "7TG_umxAZkQ",
    "image": "/media/podcast/ep-building-tomorrows-culture",
    "links": {
      "amazon": "https://music.amazon.com/podcasts/8a575c58-a94c-4707-9173-e2e42d17bbb5/episodes/672fff6a-c023-4c87-81b5-b8f5f733178c/dogood-insider---raw-journeys-from-start-up-founders-to-scale-up-ceos-building-tomorrow%E2%80%99s-culture-daniel-marashlian-on-managing-sme-culture-amidst-rapid-growth-surge",
      "spotify": "https://open.spotify.com/episode/0IsS2pjxknNy5NMKfvQJzQ?si=ef44e62cbb204faf",
      "apple": "https://podcasts.apple.com/us/podcast/building-tomorrows-culture-daniel-marashlian-on-managing/id1786906519?i=1000701647563",
      "youtube": "https://youtu.be/7TG_umxAZkQ"
    },
    "guestIntro": [
      "Daniel Marashlian, Co-founder & CTO of Drata. Two years ago, Daniel led Drata through a remarkable growth journey over the course of 12 months. He successfully doubled the workforce from 300 to 600 employees and recently integrated the newly acquired SafeBase in early 2025.",
      "With his unique insights, Daniel will share the challenges of maintaining a strong workplace culture amid rapid expansion, the critical role of influence in business, in navigating these changes, and the operational hurdles that come with scaling."
    ],
    "summary": [
      "In this conversation, Seb Wichmann speaks with Daniel Marashlian, co-founder and CTO of Drata, about the challenges and strategies involved in scaling a company from 300 to 600 employees while maintaining a strong workplace culture. Daniel shares insights on the importance of cultural values, the role of trust and time, and the necessity of being customer-obsessed. They discuss the practical steps taken to integrate new hires and the lessons learned from early growth experiences, emphasizing the need for a clear understanding of the product and customer needs. In this conversation, Daniel Marashlian discusses the importance of understanding the Ideal Customer Profile (ICP) and building a culture of doers within the organization. He emphasizes the need for effective communication and clarity in processes, especially during times of change such as acquisitions. Trust and transparency are highlighted as key components in fostering a positive workplace culture, particularly in a remote work environment. The conversation also touches on the challenges faced post-acquisition and the strategies employed to maintain employee engagement and morale."
    ],
    "chapters": [
      "Navigating Rapid Growth and Cultural Integrity",
      "Challenges of Scaling and Hiring",
      "Lessons Learned from Early Growth",
      "Understanding Product and Customer Needs",
      "Understanding the Ideal Customer Profile (ICP)",
      "Building a Culture of Doers and Practitioners",
      "Effective Communication and Clarity in Processes",
      "Navigating Challenges Post-Acquisition",
      "Fostering Trust and Transparency in the Workplace",
      "Creating a Vibrant Remote Work Culture"
    ],
    "keywords": [
      "Drata",
      "ICP",
      "acquisition",
      "challenges",
      "communication",
      "company culture",
      "culture",
      "customer obsession",
      "customer success",
      "employee engagement",
      "growth",
      "hiring",
      "integration",
      "leadership",
      "remote work",
      "scaling",
      "team building",
      "transparency",
      "trust",
      "workplace culture"
    ]
  },
  {
    "slug": "from-silicon-val",
    "liveSlug": "from-silicon-val",
    "title": "From Silicon Val. to Seafloor",
    "subtitle": "Reimagining Sustainable Deep-Sea Mining with Oliver Gunasekara",
    "cardTitle": "From Silicon Val. to Seafloor",
    "cardSubtitle": "Reimagining Sustainable Deep-Sea Mining with Oliver Gunasekara",
    "duration": "32:55",
    "metaTitle": "After selling to AMD: Oliver Gunasekara",
    "metaDescription": "Oliver Gunasekara sold his video compression company to AMD, then founded Impossible Metals. He talks about sustainable deep-sea mining and ethics.",
    "youtubeId": "pRKcZhPnEyY",
    "image": "/media/podcast/ep-from-silicon-val",
    "links": {
      "amazon": "https://music.amazon.com/podcasts/8a575c58-a94c-4707-9173-e2e42d17bbb5/episodes/dfc29b0e-202f-4dfb-8450-bbe924461464/dogood-insider---raw-journeys-from-start-up-founders-to-scale-up-ceos-from-silicon-val-to-seafloor-reimagining-sustainable-deep-sea-mining-with-oliver-gunasekara",
      "spotify": "https://open.spotify.com/episode/7CKAt9gp4YH2YbEKfysPad?si=0e9dede360bd4b48",
      "apple": "https://podcasts.apple.com/us/podcast/from-silicon-val-to-seafloor-reimagining-sustainable/id1786906519?i=1000694446227",
      "youtube": "https://youtu.be/pRKcZhPnEyY"
    },
    "guestIntro": [
      "Oliver Gunasekara emerges as a compelling figure in the intersection of technology, sustainability, and innovative entrepreneurship. As the founder of Impossible Metals, he brings a unique perspective shaped by his successful track record in the semiconductor industry, including the notable sale of his video compression company to AMD. What makes Oliver particularly intriguing is his bold pivot towards addressing one of the most pressing challenges of our time - sustainable metal extraction for the clean energy transition.",
      "His vision for Impossible Metals represents a groundbreaking approach to deep-sea mining, utilizing advanced robotics and AI to collect critical metals like nickel, cobalt, copper, and manganese with minimal environmental impact. The company's innovative technology, which hovers above the seabed and selectively collects rocks while protecting marine ecosystems, demonstrates a remarkable balance between technological advancement and environmental stewardship. What sets Oliver apart is his commitment to making Impossible Metals a public benefit corporation, dedicating 1% of company shares to nonprofit causes, and maintaining a strong focus on environmental responsibility despite the pressures of scaling a startup.",
      "Beyond the technical and environmental aspects, Oliver brings valuable insights into the challenges of building and managing a purpose-driven company in a controversial industry. His experience in navigating the complexities of team building, remote work culture, and maintaining work-life balance while preparing for Series A funding offers practical wisdom for other entrepreneurs. His realistic yet optimistic approach to addressing the critical metals shortage - acknowledging both the necessity of mining and the importance of doing it responsibly - makes him an ideal guest to discuss the intersection of operational challenges, cultural development, and conscious leadership in today's business landscape."
    ],
    "summary": [
      "In this conversation, Oliver Gunasekara discusses the mission of his company focused on sustainable deep sea mining, the challenges faced in the mining industry, and the innovative technologies being developed to minimize environmental impact. He emphasizes the importance of transparency, ethical practices, and building a mission-driven team to address the growing demand for critical metals needed for the energy transition."
    ],
    "chapters": [
      "The Mission of Sustainable Deep Sea Mining",
      "Challenges in the Mining Industry",
      "Understanding Polymetallic Nodules",
      "Innovative Mining Technology",
      "Transparency and Ethical Mining Practices",
      "Building a Mission-Driven Team"
    ],
    "keywords": [
      "AI",
      "deep sea mining",
      "energy transition",
      "environmental impact",
      "ethical practices",
      "mining industry challenges",
      "mining technology",
      "polymetallic nodules",
      "robotics",
      "sustainable mining"
    ]
  },
  {
    "slug": "the-gen-z-community-era",
    "liveSlug": "the-gen-z-community-era",
    "title": "The Gen-Z Community Era",
    "subtitle": "Christian Brown Breaks Social Barriers",
    "cardTitle": "The Gen-Z Community Era",
    "cardSubtitle": "Christian Brown Breaks Social Barriers",
    "duration": "44:19",
    "metaTitle": "Christian Brown: a founder since age 15",
    "metaDescription": "Glewee co-founder Christian Brown, on the Forbes 30 Under 30 list, on starting his first business at 15 and what his upbringing taught him.",
    "youtubeId": "etrCAJXiZCE",
    "image": "/media/podcast/ep-the-gen-z-community-era",
    "links": {
      "amazon": "https://music.amazon.com.au/podcasts/8a575c58-a94c-4707-9173-e2e42d17bbb5/episodes/ead1a216-bd25-40dc-b568-d7ef665fea3c/dogood-insider---raw-journeys-from-start-up-founders-to-scale-up-ceos-threads-of-sustainability-kat-dey-weaves-ethical-business-practices-into-innovation",
      "spotify": "https://open.spotify.com/episode/52t1dNO40z1zv4SdHvCHwq?si=d8fd0db22c9c4f78",
      "apple": "https://podcasts.apple.com/gr/podcast/the-gen-z-community-era-christian-brown-breaks-social/id1786906519?i=1000689789416",
      "youtube": "https://youtu.be/etrCAJXiZCE"
    },
    "guestIntro": [
      "Christian Brown is the Co-founder and CMO of Glewee, who's already made the Forbes 30-Under-30 list. From starting his entrepreneurial journey at age 15 to scaling a revolutionary influencer marketing platform during COVID-19, Christian’s story embodies ambition and innovation. He and his team of Gen Z innovators transformed Glewee from sticky-note ideas into a game-changing platform that's reshaping how brands and creators collaborate.",
      "Today, we'll dive deep into the challenges of building a remote-first culture, scaling operations while maintaining authenticity, and the delicate balance of leading a Gen Z workforce.",
      "Whether you're scaling your startup or navigating the complexities of modern leadership, Chris's insights on building high-performing teams and maintaining cultural integrity during rapid growth will provide valuable lessons for founders and CEOs alike."
    ],
    "summary": [
      "Christian Brown, co-founder and CMO of Glewee, shares his journey from a young entrepreneur to leading a revolutionary influencer marketing platform. He discusses the importance of innovation, the influence of his upbringing, and the impact of social media on his career.",
      "Christian emphasizes the significance of self-reliance in achieving goals and reflects on the opportunities that arose during the COVID-19 pandemic, which allowed him and his team to focus on building their business.",
      "In this conversation, Christian Brown shares his journey from facing setbacks in his career to building a successful company, Glewee. He discusses the importance of leadership principles, team culture, and the value of community in entrepreneurship. Christian emphasizes learning from mistakes, the significance of interpersonal relationships, and how his extroverted nature drives his passion for connecting with others. The conversation highlights the transformative power of community and collaboration in achieving personal and professional success."
    ],
    "chapters": [
      "The Spark of Innovation",
      "Building a Remote Culture",
      "The Influence of Upbringing",
      "Navigating the Social Media Landscape",
      "The Drive for Excellence",
      "The Journey of GleWee",
      "Seizing Opportunities During COVID-19",
      "Building a New Life After Setbacks",
      "Leadership Principles and Team Culture",
      "Learning from Mistakes and Personal Growth",
      "The Importance of Community in Entrepreneurship"
    ],
    "keywords": [
      "COVID-19",
      "Christian Brown",
      "Gen Z",
      "GlueWee",
      "Gluey",
      "community",
      "entrepreneurship",
      "influencer marketing",
      "innovation",
      "leadership",
      "mistakes",
      "networking",
      "personal growth",
      "relationships",
      "remote culture",
      "social media",
      "team culture"
    ]
  },
  {
    "slug": "the-workforce-drought",
    "liveSlug": "the-workforce-drought",
    "title": "The Workforce Drought",
    "subtitle": "Craig Rupp’s Journey from Engineer to AgTech Visionary & Legacy of Leadership",
    "cardTitle": "The Workforce Drought",
    "cardSubtitle": "Craig Rupp’s Journey from Engineer to AgTech Visionary & Legacy of Leadership",
    "duration": "32:24",
    "metaTitle": "Serial founder Craig Rupp on six companies",
    "metaDescription": "Craig Rupp has founded six companies, including 640 Labs, acquired by Monsanto. From the farm to engineering to founding Sabanto, and what he learned.",
    "youtubeId": "CphoCV8GWSQ",
    "image": "/media/podcast/ep-the-workforce-drought",
    "links": {
      "amazon": "https://music.amazon.com/podcasts/8a575c58-a94c-4707-9173-e2e42d17bbb5/episodes/36ba9f82-66ca-4f98-93da-8131b6490a31/dogood-insider---raw-journeys-from-start-up-founders-to-scale-up-ceos-the-workforce-drought---craig-rupp's-journey-from-engineer-to-agtech-visionary",
      "spotify": "https://open.spotify.com/episode/1w2RX7vTBHuAfvis9LAyFQ?si=a4367b127b964b42",
      "apple": "https://podcasts.apple.com/gr/podcast/the-workforce-drought-craig-rupps-journey-from/id1786906519?i=1000681351021",
      "youtube": "https://youtu.be/CphoCV8GWSQ"
    },
    "guestIntro": [
      "Craig Rupp is a visionary entrepreneur with a remarkable journey. Growing up on a farm, Craig transitioned into a successful career in electrical engineering, contributing to the development of cellular technology over 25 years. As a true serial entrepreneur, he has founded six companies, including 640 Labs, which was acquired by Monsanto. Today, he leads an agriculture tech company revolutionizing rural farming with robotic tractors, offering solutions to labor shortages across over 25 states.",
      "Craig’s leadership is defined by his belief in employee empowerment and his dedication in creating a culture of innovation and trust. His early hires played a crucial role in shaping the company’s ethos, emphasizing employee satisfaction alongside profitability. From navigating startup challenges to scaling with purpose, Craig’s experiences offer valuable insights for leaders in any industry. Join us as we uncover his story, vision, and the lessons he’s learned along the way."
    ],
    "summary": [
      "In this episode of DoGood Insider, host Seb Wichmann interviews Craig Rupp, a visionary entrepreneur and founder of Sabanto, an agriculture tech company. Craig shares his journey from electrical engineering to entrepreneurship, emphasizing the importance of employee empowerment and nurturing a culture of trust within his team. He discusses the innovative solutions Sabanto provides to address labor shortages in farming through autonomous technology. The conversation also delves into the operational challenges faced in the agriculture sector, the significance of maintaining a strong company culture in a remote work environment, and valuable advice for tech founders on fostering team dynamics. Craig highlights the need for authenticity and personal relationships in business, leaving listeners with insights on how to cultivate a positive work environment."
    ],
    "chapters": [
      "Introduction to Craig Rupp and His Vision",
      "Innovations in Agriculture: Sabanto's Approach",
      "Building a Strong Company Culture Remotely",
      "Advice for Tech Founders on Team Dynamics",
      "The Importance of Authenticity and Relationships"
    ],
    "keywords": [
      "agriculture technology",
      "authenticity",
      "company culture",
      "employee empowerment",
      "entrepreneurship",
      "farming",
      "innovation",
      "labor shortages",
      "leadership",
      "robotics",
      "skilled labor shortage",
      "trust"
    ]
  },
  {
    "slug": "holistic-leadership-in-action",
    "liveSlug": "holistic-leadership-in-action",
    "title": "Holistic Leadership in Action",
    "subtitle": "How Peggy Rajski Balances Strategy, Intuition, and Discernment to Drive Change",
    "cardTitle": "Holistic Leadership in Action",
    "cardSubtitle": "How Peggy Rajski Balances Strategy, Intuition, and Discernment to Drive Change",
    "duration": "1:01:37",
    "metaTitle": "Peggy Rajski: founding The Trevor Project",
    "metaDescription": "The Trevor Project founder Peggy Rajski on leading with intuition and values, and guiding the organisation she started through decades of change.",
    "youtubeId": "9eoV0ced4-w",
    "image": "/media/podcast/ep-holistic-leadership-in-action",
    "links": {
      "amazon": "https://music.amazon.com/podcasts/8a575c58-a94c-4707-9173-e2e42d17bbb5/episodes/cad1489d-b5fe-40d2-9639-19347eaa69c6/dogood-insider---raw-journeys-from-start-up-founders-to-scale-up-ceos-holistic-leadership-in-action-how-peggy-rajski-balances-strategy-intuition-and-discernment-to-drive-change",
      "spotify": "https://open.spotify.com/episode/6laotbqxExsrvbJlhZPqhQ?si=8947b9e793634b89",
      "apple": "https://podcasts.apple.com/us/podcast/holistic-leadership-in-action-how-peggy-rajski-balances/id1786906519?i=1000717539652",
      "youtube": "https://youtu.be/9eoV0ced4-w"
    },
    "guestIntro": [
      "Peggy Rajski, a visionary leader and creative force whose holistic approach to leadership has influenced change across film, education, and the nonprofit world. As the founder of The Trevor Project, Peggy has played a pivotal role in the organization's evolution over nearly three decades, guiding the organization through a critical period of transition marked by cultural shifts and resource constraints.",
      "With more than forty years of leadership experience—spanning her Oscar-winning film work to her tenure as Dean of the School of Film and Television at LMU—Peggy brings a rare blend of emotional intelligence, deep listening, creative insight, and system-level thinking to every challenge she meets."
    ],
    "summary": [
      "In this conversation, Peggy Rajski and Seb Wichmann explore the nuances of leadership, focusing on the importance of intuition, values, and the balance of feminine and masculine energies. Peggy shares her experiences with the Trevor Project, discussing the challenges of navigating organizational growth and the need for clear values. They emphasize the significance of discernment in decision-making and the role of storytelling in inspiring others. The discussion highlights the complexities of leadership in a rapidly changing world and the necessity of cultivating both intuition and emotional intelligence."
    ],
    "chapters": [
      "Navigating the Current Landscape",
      "The Role of Intuition in Leadership",
      "Values and Organizational Culture",
      "The Importance of Service and Kindness",
      "Responding vs. Reacting as a Leader",
      "The Vision Behind the Trevor Project",
      "Navigating Leadership Challenges",
      "Cultivating Intuition and Discernment",
      "Balancing Masculine and Feminine Energies",
      "Establishing Clear Values in Organizations"
    ],
    "keywords": [
      "Trevor Project",
      "discernment",
      "emotional intelligence",
      "feminine energy",
      "intuition",
      "leadership",
      "masculine energy",
      "organizational culture",
      "service",
      "values"
    ]
  },
  {
    "slug": "beyond-distance",
    "liveSlug": "beyond-distance",
    "title": "Beyond Distance",
    "subtitle": "Transforming Remote Work into Meaningful Connections with Jeanette Winters",
    "cardTitle": "Beyond Distance",
    "cardSubtitle": "Transforming Remote Work into Meaningful Connections with Jeanette Winters",
    "duration": "34:43",
    "metaTitle": "Remote work that still connects: 8x8's CHRO",
    "metaDescription": "Jeanette emphasizes the need for emotional intelligence and the significance of recognizing and addressing employee engagement and disengagement.",
    "youtubeId": null,
    "image": "/media/podcast/ep-beyond-distance",
    "links": {
      "amazon": "https://music.amazon.com/podcasts/8a575c58-a94c-4707-9173-e2e42d17bbb5/episodes/5a549306-f608-4d0c-b331-6a3156d9e0e5/dogood-insider---raw-journeys-from-start-up-founders-to-scale-up-ceos-beyond-distance-transforming-remote-work-into-meaningful-connections-with-jeanette-winters",
      "spotify": "https://open.spotify.com/episode/2w4Lx5RtxNBP1lkRXHZLaH?si=yRHjk9W3RuG07zdD8FH4tA",
      "apple": "https://podcasts.apple.com/us/podcast/beyond-distance-transforming-remote-work-into-meaningful/id1786906519?i=1000708509058",
      "youtube": "https://youtu.be/nhsR_DHZgu0"
    },
    "guestIntro": [
      "Jeanette Winters, the CHRO from 8x8 who brings invaluable insights from managing a workforce where 48 % of employees are remote. As a leader navigating the complexities of distributed teams, Jeanette has pioneered approaches to keep remote employees deeply engaged with the company culture and mission.",
      "Her experience transforming traditional workplace dynamics into meaningful remote connections has made her a thought leader. From building authentic relationships across time zones to ensuring remote team members feel as valued as their in-office counterparts, Jeanette's practical insights go beyond conventional remote work strategies. Today, she will share her revelations about fostering genuine connections"
    ],
    "summary": [
      "In this conversation, Seb Wichmann and Jeanette K Winters discuss the challenges and strategies of maintaining meaningful connections in a remote work environment. Jeanette shares her insights as CHRO of 8x8, where nearly half of the workforce is remote. They explore the importance of authentic connections, cultural sensitivity, and the balance of masculine and feminine qualities in leadership. Jeanette emphasizes the need for emotional intelligence and the significance of recognizing and addressing employee engagement and disengagement. The discussion concludes with reflections on the importance of continuous learning and personal growth in leadership.’"
    ],
    "chapters": [
      "Introduction and Personal Background",
      "Transforming Remote Work into Meaningful Connections",
      "The Importance of Authentic Connections",
      "Cultural Sensitivity and Understanding",
      "Balancing Masculinity and Femininity in Leadership",
      "Strategies for Employee Engagement",
      "Recognizing and Addressing Disengagement",
      "The Role of Emotional Intelligence in Leadership",
      "Conclusion and Final Thoughts"
    ],
    "keywords": [
      "authentic connections",
      "company culture",
      "cultural sensitivity",
      "emotional intelligence",
      "employee engagement",
      "femininity",
      "leadership",
      "masculinity",
      "remote work",
      "workplace dynamics"
    ]
  },
  {
    "slug": "scaling-teams-and-building-culture",
    "liveSlug": "scaling-teams-and-building-culture",
    "title": "Scaling Teams & Culture",
    "subtitle": "Lessons in Hiring with Brian Samson",
    "cardTitle": "Scaling Teams & Culture",
    "cardSubtitle": "Lessons in Hiring with Brian Samson",
    "duration": "40:17",
    "metaTitle": "Brian Samson on hiring as a founder",
    "metaDescription": "Plugg Technologies founder Brian Samson on hiring in Latin America, why a company has to know its identity first, and trying new ways to recruit.",
    "youtubeId": "6GJx40peB6o",
    "image": "/media/podcast/ep-scaling-teams-and-building-culture",
    "links": {
      "amazon": "https://music.amazon.com/podcasts/8a575c58-a94c-4707-9173-e2e42d17bbb5/episodes/98068d2e-cde9-4a86-9c70-b339ae6c0ccc/dogood-insider---raw-journeys-from-start-up-founders-to-scale-up-ceos-scaling-teams-and-building-culture-lessons-in-hiring-with-brian-samson",
      "spotify": "https://open.spotify.com/episode/3ofSpmQKeQwklRLLDkZKnR?si=361ed1916aee4aa0",
      "apple": "https://podcasts.apple.com/us/podcast/scaling-teams-and-building-culture-lessons-in-hiring/id1786906519?i=1000700741872",
      "youtube": "https://youtu.be/6GJx40peB6o"
    },
    "guestIntro": [
      "Brian Samson, founder of Plugg Technologies, about the intricacies of hiring and recruitment, particularly focusing on the Latin American market. They explore the evolution of Plugg, the importance of understanding company culture in hiring, and innovative strategies such as video job descriptions and experiential recruitment methods. Brian shares valuable lessons learned from his extensive experience in the field, emphasizing the need for companies to know their identity and to try new approaches in their hiring processes."
    ],
    "summary": [
      "In this engaging conversation, Seb Wichmann speaks with Brian Samson, founder of Plugg Technologies, about the intricacies of hiring and recruitment, particularly focusing on the Latin American market. They explore the evolution of Plugg, the importance of understanding company culture in hiring, and innovative strategies such as video job descriptions and experiential recruitment methods. Brian shares valuable lessons learned from his extensive experience in the field, emphasizing the need for companies to know their identity and to try new approaches in their hiring processes."
    ],
    "chapters": [
      "Introduction to Brian Samson and Pluck Technologies",
      "Lessons Learned in Hiring Practices",
      "The Role of Video in Recruitment",
      "Understanding Talent Arbitrage in Latin America",
      "Innovative Recruitment Strategies",
      "Key Takeaways and Closing Thoughts"
    ],
    "keywords": [
      "Brian Samson",
      "Latin America",
      "Pluck Technologies",
      "company culture",
      "entrepreneurship",
      "hiring",
      "nearshoring",
      "recruitment",
      "talent acquisition",
      "video job descriptions"
    ]
  },
  {
    "slug": "staying-lean-growing-big",
    "liveSlug": "staying-lean-growing-big",
    "title": "Staying Lean & Growing Big",
    "subtitle": "How Benjamin Ard Built a Successful 2-Man SaaS Company",
    "cardTitle": "Staying Lean & Growing Big",
    "cardSubtitle": "How Benjamin Ard Built a Successful 2-Man SaaS Company",
    "duration": "44:34",
    "metaTitle": "Benjamin Ard on running a 2-person SaaS",
    "metaDescription": "Benjamin Ard discusses his journey in building a successful SaaS company with a small team.",
    "youtubeId": "tuJD4cn3doA",
    "image": "/media/podcast/ep-staying-lean-growing-big",
    "links": {
      "amazon": "https://music.amazon.com.au/podcasts/8a575c58-a94c-4707-9173-e2e42d17bbb5/episodes/3ce8a2d4-7e7a-4b9d-a1ba-6a71868ad407/dogood-insider---raw-journeys-from-start-up-founders-to-scale-up-ceos-staying-lean-growing-big-how-benjamin-ard-built-a-multi-million-dollar-saas-company-with-a-2-man-team",
      "spotify": "https://open.spotify.com/episode/2ycAXojuMOs6RIYf6d6h6K?si=51318b3157744310",
      "apple": "https://podcasts.apple.com/gr/podcast/staying-lean-growing-big-how-benjamin-ard-built-a/id1786906519?i=1000694090649",
      "youtube": "https://www.youtube.com/watch?v=tuJD4cn3doA"
    },
    "guestIntro": [
      "Benjamin Ard leads Masset, a successful two-person SaaS firm, employing a distinctive philosophy centered on the potential of operating a one-person billion-dollar enterprise in the future. This involves a strong emphasis on efficiency, customer engagement, marketing efforts, and a streamlined organizational structure.",
      "Benjamin advocates for a purposefully small operation, utilizing AI and innovative tools to simplify processes and eliminate unnecessary complexity. His approach offers a refreshing take on business management, demonstrating a commitment to aligning with investors while maintaining profitability and responsibly managing their funds.",
      "Moreover, Benjamin's resourceful strategy for others to learn how to run a business without extensive marketing expertise provides valuable lessons for entrepreneurs. His proficiency in tackling B2B challenges and his focus on optimizing operations enrich our discussion. He offers insights on leveraging AI to replace external consultants and freelancers, along with an emphasis on maintaining close relationships with customers. This forward-thinking and practical approach serves as an excellent model for modern SaaS companies."
    ],
    "summary": [
      "In this conversation, Benjamin Ard discusses his journey in building a successful SaaS company with a small team. He emphasizes the importance of staying close to customers, leveraging technology and AI, and the evolving landscape of freelance work. Benjamin shares insights on the challenges and opportunities of running a small business, the shift in employee mindsets, and the collective decision-making process that drives their operational efficiency. In this conversation, Benjamin Ard discusses the importance of thoughtful hiring practices, the distinction between freelancers and in-house staff, and the evolving role of AI in the workforce. He emphasizes the need for businesses to prioritize customer success and maintain close relationships with their clients while navigating the challenges of team dynamics and the potential of AI to enhance human capabilities."
    ],
    "chapters": [
      "Introduction to Benjamin Ard and His Journey",
      "The Philosophy of Staying Small and Nimble",
      "The Future of Business: AI and Freelance Economy",
      "Challenges and Opportunities in a Small Team",
      "The Shift in Employee Mindset and Market Trends",
      "Collective Decision-Making in Small Teams",
      "The Importance of Thoughtful Hiring",
      "Navigating Freelancers vs. In-House Staff",
      "The Future of AI in the Workforce",
      "Balancing Proximity to Customers with Team Size"
    ],
    "keywords": [
      "AI",
      "SaaS",
      "business growth",
      "business strategy",
      "content marketing",
      "customer connection",
      "customer success",
      "employee engagement",
      "entrepreneurship",
      "freelance economy",
      "freelancers",
      "hiring",
      "innovation",
      "leadership",
      "marketing",
      "operational efficiency",
      "small business",
      "team dynamics"
    ]
  },
  {
    "slug": "sustainable-threads-of-change",
    "liveSlug": "sustainable-threads-of-change",
    "title": "Sustainable Threads of Change",
    "subtitle": "Kat Dey Weaves Ethics into Business Innovation",
    "cardTitle": "Sustainable Threads of Change",
    "cardSubtitle": "Kat Dey Weaves Ethics into Business Innovation",
    "duration": "33:34",
    "metaTitle": "Kat Dey: ethics at the heart of Ettitude",
    "metaDescription": "Kat Dey is the Co-Founder and President of Ettitude, a groundbreaking material science company revolutionizing home goods with sustainability at its core.",
    "youtubeId": "1xn9tigXB6c",
    "image": "/media/podcast/ep-sustainable-threads-of-change",
    "links": {
      "amazon": "https://music.amazon.com.au/podcasts/8a575c58-a94c-4707-9173-e2e42d17bbb5/episodes/ead1a216-bd25-40dc-b568-d7ef665fea3c/dogood-insider---raw-journeys-from-start-up-founders-to-scale-up-ceos-threads-of-sustainability-kat-dey-weaves-ethical-business-practices-into-innovation",
      "spotify": "https://open.spotify.com/episode/23M078CftoecErpIxON0Ew?si=9047a15e893842e6",
      "apple": "https://podcasts.apple.com/gr/podcast/threads-of-sustainability-kat-dey-weaves-ethical/id1786906519?i=1000691098150",
      "youtube": "https://youtu.be/1xn9tigXB6c"
    },
    "guestIntro": [
      "Kat Dey is the Co-Founder and President of Ettitude, a groundbreaking material science company revolutionizing home goods with sustainability at its core.",
      "Under Kat’s leadership, ettitude has become a certified B Corp, setting new standards in sustainable business practices with their patented CleanBamboo® technology. From redefining luxury bedding and bath linens to promoting ethical and eco-conscious innovation, Kat’s journey is a masterclass in aligning values with impact.",
      "In this episode, we’ll explore Kat’s operational challenges, the evolution of her company’s mission, and how she’s championing sustainability while inspiring change across the textile industry. Get ready for an insightful conversation packed with practical lessons and powerful takeaways from one of today’s most dynamic leaders."
    ],
    "summary": [
      "In this enlightening conversation, Kat Dey, co-founder and president of Ettitude, discusses the company's commitment to sustainability and innovation in the textile industry. She shares insights on the importance of B Corp certification, the challenges of greenwashing, and the shift in business strategy during the COVID-19 pandemic. Kat emphasizes the need for transparency and ethical practices in business, as well as the potential of bamboo textiles to revolutionize the market. The conversation highlights the balance between quality and affordability, and the significance of company culture in driving a mission-focused organization."
    ],
    "chapters": [
      "Introduction and Context of the Conversation",
      "The Vision Behind Attitude",
      "Sustainability and Greenwashing",
      "B Corp Certification and Its Importance",
      "The Shift in Business Strategy During COVID-19",
      "Innovative Textiles and Their Benefits",
      "The Future of Bamboo Textiles",
      "Balancing Quality and Affordability",
      "Company Culture and Values",
      "Final Thoughts and Conclusion"
    ],
    "keywords": [
      "B Corp",
      "bamboo textiles",
      "company culture",
      "consumer awareness",
      "eco-friendly products",
      "ethical business",
      "greenwashing",
      "innovation",
      "regenerative business",
      "sustainability"
    ]
  },
  {
    "slug": "beyond-the-balance-sheet",
    "liveSlug": "beyond-the-balance-sheet",
    "title": "Beyond the Balance Sheet",
    "subtitle": "Borys Pikalov on Customer Loyalty & Staff Wellbeing in Decentralized Finance",
    "cardTitle": "Beyond the Balance Sheet",
    "cardSubtitle": "Borys Pikalov on Customer Loyalty & Staff Wellbeing in Decentralized Finance",
    "duration": "38:54",
    "metaTitle": "Borys Pikalov on staff wellbeing at Stobox",
    "metaDescription": "Explore employee wellbeing and engagement with blockchain expert Borys Pikalov, sharing strategies for high-performance teams in decentralized workplaces.",
    "youtubeId": "Lp-DSPXvHyU",
    "image": "/media/podcast/ep-beyond-the-balance-sheet",
    "links": {
      "amazon": "https://music.amazon.com/podcasts/8a575c58-a94c-4707-9173-e2e42d17bbb5/episodes/21dd22b6-a333-4315-bb73-407207d7ff40/dogood-insider---raw-journeys-from-start-up-founders-to-scale-up-ceos-beyond-the-balance-sheet---borys-pikalov-on-customer-loyalty-staff-wellbeing-in-decentralized-finance",
      "spotify": "https://open.spotify.com/episode/7e846Y3XlFNHNhi2yJ3UvL?si=994d5b9e77ce44eb",
      "apple": "https://podcasts.apple.com/gr/podcast/beyond-the-balance-sheet-borys-pikalov-on-customer/id1786906519?i=1000681865365",
      "youtube": "https://youtu.be/Lp-DSPXvHyU"
    },
    "guestIntro": [
      "Borys Pikalov, a trailblazer in blockchain, tokenization, and decentralized finance is passionate about fostering employee wellbeing and employee engagement in innovative industries. As the Co-Founder of Stobox, Borys has spent over five years leading business strategy, operations, and analytics, championing the mass adoption of tokenization and fostering inclusive financial ecosystems, while promoting employee wellbeing in the workplace. In this role, he led over 70 asset tokenization projects involving over $1 billion worth of assets.",
      "Beyond Stobox, Borys is a seasoned independent consultant, and a former researcher bringing a wealth of academic and practical insights to his work.",
      "He’s been a featured speaker at events like the Blockchain Real Estate Summit and a quoted thought leader in publications like BeInCrypto, where his expertise in real-world asset tokenization has shaped industry conversations.",
      "Get ready to dive into the nuances of security token offerings, innovative capital-raising strategies, and why employee wellbeing is important for the future of blockchain technology with one of the brightest minds in the space."
    ],
    "summary": [
      "In this conversation, Seb Wichmann and Boris Pikalov explore the intricate balance between customer centricity and staff wellbeing within the context of tokenization and decentralized finance. Boris shares insights on navigating high-performance cultures, the importance of intrinsic motivation, and effective communication strategies for complex industries. The discussion emphasizes the need for founders to articulate their value propositions clearly while fostering a supportive work environment with employee engagement and wellbeing that respects individual autonomy."
    ],
    "chapters": [
      "Introduction to DoGood and Boris Pikalov",
      "Balancing Customer Centricity and Employee Wellbeing",
      "Understanding Tokenization and Decentralized Finance",
      "Communicating Value in Complex Industries",
      "Intrinsic Motivation and Leadership Strategies"
    ],
    "keywords": [
      "Boris Pikalov",
      "DoGood",
      "blockchain",
      "communication",
      "customer centricity",
      "decentralized finance",
      "employee engagement and wellbeing",
      "employee wellbeing",
      "employee wellbeing in the workplace",
      "intrinsic motivation",
      "leadership",
      "staff wellbeing",
      "tokenization"
    ]
  },
  {
    "slug": "no-compromise-just-care",
    "liveSlug": "no-compromise%2C-just-care",
    "title": "No Compromise, Just Care",
    "subtitle": "John Hoey on Hiring with Heart & Leading with Soul",
    "cardTitle": "No Compromise, Just Care",
    "cardSubtitle": "John Hoey on Hiring with Heart & Leading with Soul",
    "duration": "38:22",
    "metaTitle": "John Hoey on hiring with heart",
    "metaDescription": "John Hoey, CEO of The Y, on building an organisation from the inside out: hiring with heart, leading with soul and a culture of care.",
    "youtubeId": "0HKGiJo2bFE",
    "image": "/media/podcast/ep-no-compromise-just-care",
    "links": {
      "amazon": "https://music.amazon.com/podcasts/8a575c58-a94c-4707-9173-e2e42d17bbb5/episodes/c0eabf65-5a3b-4805-ab69-4d96588c78e2/dogood-insider---raw-journeys-from-start-up-founders-to-scale-up-ceos-how-values-driven-hiring-builds-stronger-teams-john-hoey-ceo-of-the-y-in-central-maryland",
      "spotify": "https://open.spotify.com/episode/2FfCzk3Ik3kXkuuyVwOLwb?si=19a6d689bd6246b8",
      "apple": "https://podcasts.apple.com/us/podcast/how-values-driven-hiring-builds-stronger-teams-john/id1786906519?i=1000716845005",
      "youtube": "https://youtu.be/0HKGiJo2bFE"
    },
    "guestIntro": [
      "John Hoey, a leader who’s redefining what it means to build an organization from the inside out — with intention, heart, and purpose. As the CEO of The Y, an organization dedicated to serving people of all ages and walks of life, John has crafted a culture where every hiring decision is a reflection of the mission. He believes that who you bring in is just as important as what you do — and that belief shapes everything, from operations to team dynamics."
    ],
    "summary": [
      "In this episode:",
      "What if your hiring process prioritized values over resumes? Seb Wichmann sits down with John Hoey, CEO of the Y in Central Maryland, to explore how intentional hiring and organizational culture go hand in hand. John shares how the Y screens for alignment with its mission, why community engagement matters more than qualifications, and how today’s workforce is redefining what meaningful work looks like.",
      "What You’ll Learn:",
      "- Why hiring for values creates long-term culture alignment",
      "- How to understand a candidate’s deeper motivations",
      "- What younger generations are really looking for in their careers"
    ],
    "chapters": [
      "Introduction and Background",
      "Intentional Hiring Practices",
      "Understanding Organizational Culture",
      "The Importance of Purpose in Work"
    ],
    "keywords": [
      "Y in Central Maryland",
      "community service",
      "employee engagement",
      "hiring practices",
      "intentional hiring",
      "leadership",
      "organizational culture",
      "purpose-driven work",
      "values-driven hiring",
      "workforce motivation"
    ]
  },
  {
    "slug": "bridging-cultures-in-global-business",
    "liveSlug": "bridging-cultures-in-global-business",
    "title": "Bridging The Cultural Divide",
    "subtitle": "Redefining Cross-Continental Growth in Gaming’s Global Workforce with Chris Hewish",
    "cardTitle": "Bridging The Cultural Divide",
    "cardSubtitle": "Redefining Cross-Continental Growth in Gaming’s Global Workforce with Chris Hewish",
    "duration": "39:23",
    "metaTitle": "Chris Hewish: one culture across continents",
    "metaDescription": "They discuss how CEOs and founders can foster a thriving workplace culture within distributed teams with different cultural backgrounds.",
    "youtubeId": "ASbaLnK4lrg",
    "image": "/media/podcast/ep-bridging-cultures-in-global-business",
    "links": {
      "amazon": "https://music.amazon.com/podcasts/8a575c58-a94c-4707-9173-e2e42d17bbb5/episodes/8ee5d3dc-6920-4103-a1fc-fc930ad34dd4/dogood-insider---raw-journeys-from-start-up-founders-to-scale-up-ceos-bridging-the-cultural-divide-redefining-cross-continental-growth-in-gaming%E2%80%99s-global-workforce-with-chris-hewish",
      "spotify": "https://open.spotify.com/episode/1HkmqqFuzDOw3ab5dD0y6Q?si=0hL79WgeTpy-iG3VB-32Ow",
      "apple": "https://podcasts.apple.com/us/podcast/bridging-the-cultural-divide-redefining-cross/id1786906519?i=1000706887806",
      "youtube": "https://youtu.be/ASbaLnK4lrg"
    },
    "guestIntro": [
      "Chris Hewish, the Chief Strategy Officer and former CEO of Xsolla, discussing the challenges and successes of scaling a global company. They explore the integration of diverse cultures from Eastern Europe, the West, and Asia, and how these differences can be bridged to create a cohesive team. Chris shares insights from his personal background and professional experiences, emphasizing the importance of understanding and respecting cultural differences in the workplace"
    ],
    "summary": [
      "In this conversation, Seb Wichmann interviews Chris Hewish, the Chief Strategy Officer and former CEO of Xsolla, discussing the challenges and successes of scaling a global company. They explore the integration of diverse cultures from Eastern Europe, the West, and Asia, and how these differences can be bridged to create a cohesive team. Chris shares insights from his personal background and professional experiences, emphasizing the importance of understanding and respecting cultural differences in the workplace. In this conversation, Seb Wichmann and Chris Hewish explore the importance of cultural sensitivity in leadership, the dynamics of employee engagement, and the democratization of creative expression in the gaming industry. They discuss how leaders can foster a thriving workplace culture, the role of AI in enhancing productivity, and the significance of co-creating with consumers to build a strong community around brands."
    ],
    "chapters": [
      "Cultural Integration in a Global Company",
      "Navigating Operational Challenges and Scaling",
      "Leadership Insights from a Diverse Background",
      "Cultural Sensitivity in Leadership",
      "Performance and Employee Engagement",
      "Democratizing Creative Expression",
      "Navigating Challenges in the Gaming Industry",
      "Building Community Through Co-Creation"
    ],
    "keywords": [
      "AI",
      "Asian Business Practices",
      "Cultural Integration",
      "Diversity",
      "Eastern European Culture",
      "Global Leadership",
      "Operational Challenges",
      "Remote Work Culture",
      "Scaling",
      "Team Dynamics",
      "Western Culture",
      "co-creation",
      "community building",
      "creative expression",
      "cultural sensitivity",
      "employee engagement",
      "gaming industry",
      "leadership",
      "organizational culture",
      "performance management"
    ]
  },
  {
    "slug": "emulating-the-star",
    "liveSlug": "emulating-the-star",
    "title": "Emulating The Star Factor",
    "subtitle": "Daricus Releford’s Story from Google to Meeting The Odd Man on the Stairs",
    "cardTitle": "Emulating The Star Factor",
    "cardSubtitle": "Daricus Releford’s Story from Google to Meeting The Odd Man on the Stairs",
    "duration": "48:15",
    "metaTitle": "Daricus Releford: building and selling",
    "metaDescription": "StoreCash founder Daricus Releford on humble beginnings, building and selling multiple businesses, and the lessons he took into his next company.",
    "youtubeId": "iGl9GZjwTDk",
    "image": "/media/podcast/ep-emulating-the-star",
    "links": {
      "amazon": "https://music.amazon.com/podcasts/8a575c58-a94c-4707-9173-e2e42d17bbb5/episodes/e0dbf4cf-6e33-4b1d-bfe5-d5a877756265/dogood-insider---raw-journeys-from-start-up-founders-to-scale-up-ceos-emulating-the-star-factor-daricus-releford%E2%80%99s-story-from-google-to-meeting-the-odd-man-on-the-stairs",
      "spotify": "https://open.spotify.com/episode/6FfWcVLTj5aqqnAec3q4yh?si=4e84e106912f44f7",
      "apple": "https://podcasts.apple.com/us/podcast/emulating-the-star-factor-daricus-relefords-story/id1786906519?i=1000695953722",
      "youtube": "https://youtu.be/iGl9GZjwTDk"
    },
    "guestIntro": [
      "Daricus Releford, the visionary founder of StoreCash—a groundbreaking fintech startup empowering teens with financial literacy and modern banking tools. From humble beginnings to building and selling multiple businesses, Daricus has mastered the art of entrepreneurship, operational excellence, and team building.",
      "Daricus will share his journey from his early hustle to managing a remote team across Buffalo, Africa, and India. He’ll dive into his approach to hiring, leveraging tools, and creating a culture of trust and accountability. We’ll also explore how he’s empowering the next generation to build wealth and break barriers."
    ],
    "summary": [
      "In this engaging conversation, Seb Wichmann interviews Daricus Releford, the founder of StoreCash, a fintech startup aimed at empowering teens with financial literacy. Daricus shares his personal journey from humble beginnings, his early entrepreneurial ventures, and the lessons learned along the way.",
      "The discussion delves into the importance of financial education for young people, the challenges faced in the startup world, and the evolution of Daricus's relationship with money.",
      "Through anecdotes and insights, listeners gain a deeper understanding of the entrepreneurial spirit and the significance of fostering financial literacy in the next generation. In this conversation, Daricus shares his entrepreneurial journey, highlighting the challenges faced during peak business times, particularly Valentine's Day. He emphasizes the importance of transparency and personal communication with customers, especially during crises.",
      "The discussion transitions to his expansion efforts and the pivotal move to Silicon Valley, where he sought to understand the tech landscape. Daricus reflects on his experiences at major tech companies and the lessons learned about culture and hiring. He concludes with insights on overcoming fear in leadership and the importance of authenticity in business."
    ],
    "chapters": [
      "Introduction and Personal Updates",
      "The Journey of StoreCash and Financial Literacy for Teens",
      "The Importance of Financial Literacy and Early Insights",
      "Daricus's Relationship with Money",
      "Humble Beginnings and Early Entrepreneurship",
      "Lessons Learned from Early Ventures",
      "Scaling the Chocolate Business",
      "Reflections on Entrepreneurship and Growth",
      "Valentine's Day Challenges and Lessons Learned",
      "The Importance of Transparency and Customer Relations",
      "Expansion and the Journey to Silicon Valley",
      "Navigating the Tech Landscape and Cracking the Job Code",
      "Current Ventures and Future Aspirations",
      "Overcoming Fear and Leading with Authenticity"
    ],
    "keywords": [
      "Silicon Valley",
      "StoreCash",
      "business journey",
      "business lessons",
      "challenges",
      "customer service",
      "entrepreneurship",
      "financial literacy",
      "growth",
      "investment",
      "investor relations",
      "leadership",
      "lessons learned",
      "personal finance",
      "personal growth",
      "startup journey",
      "tech industry",
      "teens",
      "transparency"
    ]
  },
  {
    "slug": "power-envelope-money",
    "liveSlug": "power-envelope-money",
    "title": "The Power of Envelope Money",
    "subtitle": "Shane Walker on Intentional Spending Habits",
    "cardTitle": "The Power of Envelope Money",
    "cardSubtitle": "Shane Walker on Intentional Spending Habits",
    "duration": "44:06",
    "metaTitle": "Shane Walker on spending with intention",
    "metaDescription": "Shane Walker and Seb Wichmann discuss the psychology of money management, the impact of social media on spending habits",
    "youtubeId": "Fe0-uHSJUcw",
    "image": "/media/podcast/ep-power-envelope-money",
    "links": {
      "amazon": "https://music.amazon.com.au/podcasts/8a575c58-a94c-4707-9173-e2e42d17bbb5/episodes/0548e1df-4a6c-4bf9-919c-1577c9b81a1f/dogood-insider---raw-journeys-from-start-up-founders-to-scale-up-ceos-the-power-of-envelope-money-shane-walker-on-intentional-spending-habits",
      "spotify": "https://open.spotify.com/episode/0qgU53TXfoV3KkarvS0Ama?si=4bf815206b88439b",
      "apple": "https://podcasts.apple.com/gr/podcast/the-power-of-envelope-money-shane-walker-on/id1786906519?i=1000692405208",
      "youtube": "https://youtu.be/Fe0-uHSJUcw"
    },
    "guestIntro": [
      "Shane Walker is a visionary entrepreneur, financial expert, and advocate for intentional living. With over 15 years of entrepreneurial experience, Shane has dedicated his life to creating tools and systems that empower individuals to align their spending with purpose, restore financial freedom, and make smarter money decisions.",
      "As the creator of Qube Money, Shane has revolutionized the groundbreaking envelope budgeting system, seamlessly bringing it into the digital age. His expertise in personal finance, combined with his deep understanding of psychology, has helped countless people break free from the paycheck-to-paycheck cycle and achieve lasting financial peace.",
      "Beyond his professional accomplishments, Shane is a devoted husband of 18+ years, a father to eight, and a leader committed to fostering values of faith, family, and service. From exploring the wilderness to mentoring youth and serving his community, Shane’s life embodies the balance between purpose and business."
    ],
    "summary": [
      "In this conversation, Shane Walker and Seb Wichmann discuss the psychology of money management, the impact of social media on spending habits, and the innovative approach of CubeMoney, which utilizes envelope budgeting to help individuals manage their finances intentionally. They explore the importance of understanding the purpose behind spending and how intentional living can lead to better financial decisions and overall happiness. In this conversation, Shane and Seb explore the principles of budgeting, particularly the concept of envelope budgeting, and its application in both personal and business finance. They discuss the psychological aspects of spending, the importance of intentionality in financial decisions, and how these principles can be integrated into business practices to foster a culture of accountability and empowerment. Shane emphasizes the need for systems that support intentional spending and the role of team dynamics in achieving financial goals."
    ],
    "chapters": [
      "Introduction and Personal Updates",
      "The Psychology of Money Management",
      "Understanding Cube Money and Its Purpose",
      "The Impact of Social Media on Spending Habits",
      "Exploring Envelope Budgeting",
      "Intentional Spending and Financial Awareness",
      "The Psychology of Spending and Budgeting",
      "Envelope Budgeting in Business",
      "Intentional Spending and Personal Goals",
      "Building a Culture of Intentionality",
      "Empowering Teams and Systematic Approaches"
    ],
    "keywords": [
      "CubeMoney",
      "budgeting",
      "budgeting techniques",
      "business finance",
      "consumerism",
      "entrepreneurship",
      "envelope budgeting",
      "financial freedom",
      "financial habits",
      "financial literacy",
      "financial stress",
      "intentional spending",
      "money management",
      "personal finance",
      "psychology of money",
      "social media impact",
      "team empowerment"
    ]
  },
  {
    "slug": "breaking-taboos",
    "liveSlug": "breaking-taboos",
    "title": "Breaking Taboos",
    "subtitle": "Alex Fine on Transforming Sexual Health & Authenticity in Entrepreneurship",
    "cardTitle": "Breaking Taboos",
    "cardSubtitle": "Alex Fine on Transforming Sexual Health & Authenticity in Entrepreneurship",
    "duration": "38:28",
    "metaTitle": "Dame co-founder Alex Fine on breaking taboos",
    "metaDescription": "Breaking Taboos - Alex Fine on sexual health, authenticity, and empowering women while transforming workplace culture and hiring for cultural fit.",
    "youtubeId": "ja6Jcfo-UZw",
    "image": "/media/podcast/ep-breaking-taboos",
    "links": {
      "amazon": "https://music.amazon.com/podcasts/8a575c58-a94c-4707-9173-e2e42d17bbb5/episodes/68f9cedb-e557-49ed-9660-4a9e6b62f72c/dogood-insider---raw-journeys-from-start-up-founders-to-scale-up-ceos-breaking-taboos-alexandra-fine-on-transforming-sexual-health-authenticity-in-entrepreneurship",
      "spotify": "https://open.spotify.com/episode/7oC9lDvPrRbzGAOdlmddyu?si=a3ec378d439b44b4",
      "apple": "https://podcasts.apple.com/gr/podcast/breaking-taboos-alexandra-fine-on-transforming-sexual/id1786906519?i=1000685146564",
      "youtube": "https://youtu.be/ja6Jcfo-UZw"
    },
    "guestIntro": [
      "Alexandra Fine is a sexologist, entrepreneur, and a force in the wellness and sexual health space, Alexandra co-founded Dame, a company revolutionizing how we embrace pleasure as a vital part of self-care and breaking taboos surrounding sexual wellness and positive workplace culture. Recognized by Forbes' 30 Under 30, she’s built a mission-driven brand that champions innovation, organizational culture transformation, inclusivity, and unapologetic joy. Beyond the boardroom, Alexandra is a mother balancing life’s chaos with her entrepreneurial ambitions. She’s a passionate advocate for aligning personal values with professional pursuits, creating meaningful change for people and the planet through successful team building strategies and empowering women in the workplace. Join us as we explore her journey, insights into mental health, psychological safety at work, managing remote teams and what it means to be a “champion of pleasure.” This conversation promises to inspire, challenge, and empower."
    ],
    "summary": [
      "Welcome to an eye-opening episode of our podcast, where we dive deep into the world of sexual health and wellness! Join Seb Wichmann as he sits down with Alexandra Fine, the co-founder of Dame, a company that's reshaping the narrative around pleasure and intimacy. In this conversation, they tackle the taboo of sexual health discussions and the bold innovations behind Dame's groundbreaking products. They’re breaking the taboo on how we approach sexual wellness and pleasure.",
      "But it's not just about pleasure; Alexandra reveals how building a psychologically safe work environment fuels creativity and authenticity within her team, fostering a positive workplace culture. Discover the real challenges of entrepreneurship as they explore the delicate balance between staying true to your values and transforming organizational culture in a competitive landscape.",
      "From the power of emotional intelligence in leadership to the critical importance of hiring for culture fit, this episode is packed with insights on empowering women in the workplace and fostering honest communication in the workplace. Learn about team building strategies that create a culture of wellness in the workplace and drive productivity. If you're ready to challenge societal norms and embrace the conversation about pleasure and authenticity, this episode is one you won't want to miss! Tune in now and get inspired!"
    ],
    "chapters": [
      "Introduction to the Conversation",
      "Exploring Sexual Health and Pleasure",
      "Dame's Journey and Product Innovation",
      "Values and Culture at Dame",
      "The Pursuit of Greatness in Entrepreneurship",
      "Navigating Difficult Conversations",
      "Balancing Authenticity and Performance",
      "Understanding Emotions in Leadership",
      "Hiring for Culture and Values",
      "Empowering Women and Challenging Norms"
    ],
    "keywords": [
      "Sexual health & wellness",
      "emotional intelligence",
      "empowering women in the workplace",
      "personal growth",
      "psychological safety",
      "team building strategies",
      "workplace culture"
    ]
  },
  {
    "slug": "the-culinary-revolution",
    "liveSlug": "the-culinary-revolution",
    "title": "The Culinary Revolution",
    "subtitle": "Benji Koltai About Family Values, Founding & Battling Operational Models",
    "cardTitle": "The Culinary Revolution",
    "cardSubtitle": "Benji Koltai About Family Values, Founding & Battling Operational Models",
    "duration": "41:24",
    "metaTitle": "Benji Koltai: co-founding with family",
    "metaDescription": "Galley Solutions co-founder and CEO Benji Koltai on founding a company with a family member, running on EOS, and modernising food service.",
    "youtubeId": "HEaKzCIj6h4",
    "image": "/media/podcast/ep-the-culinary-revolution",
    "links": {
      "amazon": "https://music.amazon.com/podcasts/8a575c58-a94c-4707-9173-e2e42d17bbb5/episodes/8f32a1b9-d557-43a2-ac7e-0b820b4ec093/dogood-insider---raw-journeys-from-start-up-founders-to-scale-up-ceos-the-culinary-revolution---benji-koltai-about-family-founding-battling-operational-models",
      "spotify": "https://open.spotify.com/episode/0fVnT0kkq2tMjM4UozcrA4?si=71b0666fb78e497f",
      "apple": "https://podcasts.apple.com/gr/podcast/the-culinary-revolution-benji-koltai-about-family/id1786906519?i=1000681865485",
      "youtube": "https://youtu.be/HEaKzCIj6h4"
    },
    "guestIntro": [
      "Benji Koltai, the co-founder and CEO of Galley Solutions. Benji is a progressive leader who has leveraged his expertise in computer science to revolutionize the culinary industry. He started his career as a Software Engineer at Box before partnering with his brother-in-law to make a remarkable technology impact in the food service industry.",
      "At Galley, Benji and his team are working hard to improve the lives of those in the food industry, transforming this labor-intensive sector into a more efficient and sustainable workplace through new technology in the food service industry. He envisions a world where a recipe-first culinary resource planning platform substantially enhances operations, reduces waste, and most importantly, improves the employee well-being and livelihood of hardworking chefs and food service workers around the globe.",
      "Benji believes that organizational culture consulting plays a crucial role in the food industry's success. It helps improve how employees are managed. This means better systems and practices for handling staff. It also builds stronger manager and employee relationships. When people work well together, the whole business runs smoother.",
      "He plays water polo, speaks both English and Spanish, and seems to be an awesome dude all around."
    ],
    "summary": [
      "In this episode of DoGood Insider, host Seb Wichmann speaks with Benji Koltai, co-founder and CEO of Galley Solutions. They discuss the challenges of being a founder, the mission behind Galley Solutions, and the importance of improving the culinary industry through technology in the food service industry. Benji shares his personal journey that led to the creation of Galley, the chaos of the culinary world, and how he navigates employee management and company culture. They also explore the significance of establishing rhythm in business operations and the implementation of the EOS framework for success.",
      "In this conversation, Benji Koltai discusses the implementation of the Entrepreneurial Operating System (EOS) in his business, the dynamics of co-founding a company with a family member, and the importance of maintaining strong relationships in a business context. He emphasizes the need for external support, such as coaching, to navigate the challenges of entrepreneurship and highlights the balance between work and self-care as crucial for success.",
      "The discussion also touches on the significance of commitment and adaptability in co-founder relationships, as well as the value of creating a supportive network for personal and professional growth, fostering a positive workplace culture."
    ],
    "chapters": [
      "Introduction to the Do Good Founders Podcast",
      "Challenges of Being a Founder",
      "Understanding Galley Solutions",
      "The Personal Journey Behind Galley Solutions",
      "The Chaos of the Culinary Industry",
      "Navigating Employee Management and Company Culture",
      "Establishing Rhythm in Business Operations",
      "Implementing EOS for Business Success",
      "Evaluating Investment in EOS Implementation",
      "Co-Founding with Family: The Dynamics of Partnership",
      "Navigating Relationships in Business",
      "The Importance of External Support in Co-Founding",
      "Balancing Work and Self-Care as a Founder"
    ],
    "keywords": [
      "EOS",
      "Galley Solutions",
      "Technology in Food Service Industry",
      "business culture",
      "business relationships",
      "co-founder dynamics",
      "company culture",
      "culinary industry",
      "decision making",
      "employee management",
      "employee performance management",
      "entrepreneurship",
      "family business",
      "food service technology",
      "operational efficiency",
      "startup challenges",
      "startup success",
      "technology in food service",
      "work-life balance"
    ]
  }
];
