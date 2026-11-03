// Everything a visitor reads that appears on more than one page lives here.
// Edit this file, then run `npm run build` to regenerate site/.

export const SITE = "https://sukhspace.com";
export const PHONE = "918340334846";
export const PHONE_DISPLAY = "+91 83403 34846";
export const EMAIL = "sukhspace5@gmail.com";
export const INSTAGRAM = "https://www.instagram.com/sukhspace_/";
export const TEACHER = "Pinki (Pankhuri)";

// Every prefilled message ends with a source tag so Pinki can see which
// enquiries came from the website.
export const SOURCE_TAG = "(via sukhspace.com)";
export const wa = (text) =>
  `https://wa.me/${PHONE}?text=${encodeURIComponent(`${text} ${SOURCE_TAG}`)}`;

export const WA_DEFAULT = wa("Hi Pinki, I found Sukh Space online and I'd like to know more about your sessions. Could you share batch timings and fees?");

// Order follows the owner's brief: weight loss sits after postpartum recovery.
export const OFFERINGS = [
  {
    id: "womens",
    icon: "womens",
    name: "Women’s health",
    forWhom: "For women living with PCOS or PCOD, irregular periods, peri-menopause, or on a fertility journey",
    body: "Gentle, targeted practice to support cycle health, stress and weight without pushing an already stressed body harder. It is designed to sit alongside your gynaecologist’s care, never to replace it.",
    ask: "Hi Pinki, I'd like to know about the women's health sessions (PCOS, PCOD, irregular periods). Could you share batch timings and fees?",
  },
  {
    id: "mens",
    icon: "mens",
    name: "Men’s health",
    forWhom: "Support for fertility planning, stress and cortisol, hormonal and prostate wellbeing",
    body: "Practice that helps the body step out of constant high alert, so sleep, recovery and vitality have room to return. A good fit when you and your partner are planning a family together.",
    ask: "Hi Pinki, I'd like to know about the men's health sessions. Could you share batch timings and fees?",
  },
  {
    id: "prenatal",
    icon: "prenatal",
    name: "Pre-natal sessions",
    forWhom: "Safe, nurturing yoga for each trimester",
    body: "Pelvic strength, hip mobility, lower-back care, and quiet time to connect with your baby. Breathing practices and mudras keep you calm through the months ahead. Private 1:1 sessions are available for pregnant women.",
    ask: "Hi Pinki, I'm pregnant and I'd like to join pre-natal sessions. Could you share batch timings, fees, and whether a 1:1 session is possible?",
  },
  {
    id: "postpartum",
    icon: "postpartum",
    name: "Postpartum recovery",
    forWhom: "For the stress and pain that often go unheard after birth",
    body: "Slow, structured support to rebuild core strength, ease the body and restore energy as you find your feet in the beautiful, demanding journey of motherhood.",
    ask: "Hi Pinki, I recently had a baby and I'd like to start postpartum recovery sessions. Could you share batch timings and fees?",
  },
  {
    id: "weightloss",
    icon: "weightloss",
    name: "Weight loss sessions",
    forWhom: "Core-strengthening postures, twists, and sitting or standing routines",
    body: "Abdominal conditioning, waist shaping and full-body toning, for anyone seeking natural, sustainable weight management. Pair it with a customised diet plan if you’d like.",
    ask: "Hi Pinki, I'd like to join the weight loss sessions. Could you share batch timings and fees?",
  },
  {
    id: "breath",
    icon: "breath",
    name: "Meditation & breathwork",
    forWhom: "For better sleep and a calmer nervous system",
    body: "Pranayama, guided meditation and Yoga Nidra to move the body out of perpetual high alert and back into rest.",
    ask: "Hi Pinki, I'd like to join the meditation and breathwork sessions. Could you share batch timings and fees?",
  },
  {
    id: "chanting",
    icon: "chanting",
    name: "Chanting sessions",
    forWhom: "Specially designed for pregnant mothers",
    body: "Chanting practices for the overall wellbeing of mother and child, often paired with pre-natal sessions.",
    ask: "Hi Pinki, I'd like to know about the chanting sessions for pregnant mothers. Could you share timings and fees?",
  },
  {
    id: "workshops",
    icon: "workshops",
    name: "Weekend workshops & events",
    forWhom: "Breathwork, meditation, labour visualisation and more",
    body: "Expertly guided workshops that give you practical tools for balance, inner peace and holistic wellbeing. Labour visualisation is a favourite with mothers in their third trimester.",
    ask: "Hi Pinki, I'd like to hear about upcoming weekend workshops and events.",
  },
];

export const DIET_ASK = "Hi Pinki, I'm interested in a customised diet plan. Could you tell me how it works?";

// The "Where are you right now?" message builder. `suggest` lists offering ids.
export const STAGES = [
  { id: "pregnant", label: "I’m pregnant", suggest: ["prenatal", "chanting", "workshops"],
    line: "I'm pregnant and I'd like to join pre-natal sessions." },
  { id: "postpartum", label: "I recently had a baby", suggest: ["postpartum", "breath"],
    line: "I recently had a baby and I'd like to start postpartum recovery sessions." },
  { id: "ttc", label: "We’re trying to conceive", suggest: ["womens", "mens", "breath"],
    line: "We're trying to conceive and I'd like to know which sessions could support us." },
  { id: "pcos", label: "PCOS, PCOD or irregular periods", suggest: ["womens", "weightloss"],
    line: "I'm dealing with PCOS, PCOD or irregular periods and I'd like to join the women's health sessions." },
  { id: "weight", label: "I want to lose weight", suggest: ["weightloss"],
    line: "I'd like to join the weight loss sessions." },
  { id: "stress", label: "Stress, sleep or anxiety", suggest: ["breath"],
    line: "I'd like to join meditation and breathwork sessions for better sleep and less stress." },
  { id: "mens", label: "Men’s health", suggest: ["mens", "breath"],
    line: "I'm interested in the men's health sessions." },
  { id: "other", label: "Something else", suggest: ["workshops"],
    line: "I'd like to know more about Sukh Space." },
];

export const TRIMESTERS = [
  { id: "first", label: "First trimester" },
  { id: "second", label: "Second trimester" },
  { id: "third", label: "Third trimester" },
];

export const MODES = [
  { id: "online", label: "Online, from home", line: "I'd prefer to join online." },
  { id: "dhanbad", label: "In person, Dhanbad", line: "I'd like to join in person in Dhanbad." },
  { id: "unsure", label: "Not sure yet", line: "I'm not sure yet whether online or in person suits me better." },
];

export const TESTIMONIALS = [
  { quote: "Labor visualization session from Pinki Ma’am is an experience you should definitely do in your third trimester. It made my delivery so easy and exactly how I wanted it to be.",
    name: "Shreya D.", place: "Delhi", about: "Pre-natal & labour preparation", featured: true },
  { quote: "Joining Sukh Space during my pregnancy was the best decision I made. The pre-natal breathing exercises, mudras, and gentle yoga sessions kept me calm and completely stress-free throughout all nine months.",
    name: "Pooja H.", place: "Hyderabad", about: "Pre-natal wellness" },
  { quote: "The post-natal recovery program helped me regain my physical strength and emotional balance after delivery. Pinki Ma’am brings such warmth and personal care to every single session.",
    name: "Ritu V.", place: "Pune", about: "Post-natal recovery" },
  { quote: "Her dedication goes far beyond simply conducting a yoga class. She has created a beautiful space where we feel motivated, supported, and encouraged to take care of our body and mind. Her positive energy and patient guidance make every session special.",
    name: "Kartika", place: "Mumbai", about: "Regular practice" },
  { quote: "The Yoga Nidra and deep relaxation sessions at Sukh Space are truly transformative. After every class, I feel centered, peaceful, and deeply rejuvenated. Highly recommended for every mom-to-be!",
    name: "Ananya R.", place: "Kolkata", about: "Yoga Nidra & relaxation" },
  { quote: "Nothing to be changed about Pinki Ma’am. Her spiritual inclination is what I like about her. I take her guidance as coming directly from God.",
    name: "Namita S.", place: "Bangalore", about: "Spiritual guidance & yoga" },
];

export const DHANBAD_TESTIMONIALS = [
  { quote: "When I got pregnant, I searched all over Dhanbad for a certified prenatal yoga coach. Finding Sukh Space was an absolute blessing. Pankhuri’s expertise in prenatal yoga, mudras, and gentle pregnancy movements transformed my entire journey. Her guidance helped me manage back pain, kept my energy high, and prepared me mentally and physically for a smooth delivery.",
    name: "Priya S.", place: "Saraidhela, Dhanbad", about: "Pre-natal client & new mother" },
  { quote: "After childbirth, I struggled with core strength, severe fatigue, and posture issues. I couldn’t find a single coach who understood postnatal physiology until I reached out to Sukh Space. The guidance was extremely gentle, structured, and effective. The restorative sessions, pranayama, and tailored exercises helped me regain my physical strength and emotional balance.",
    name: "Neha V.", place: "Hirapur, Dhanbad", about: "Postnatal recovery & women’s wellness" },
];

export const CITIES = ["Dhanbad", "Delhi", "Mumbai", "Bangalore", "Hyderabad", "Pune", "Kolkata"];

export const FAQ = [
  { q: "Is yoga safe during pregnancy?",
    a: "Pre-natal sessions are built for pregnancy: every practice is chosen for the trimester you are in, and Pinki is a certified pre and postnatal yoga specialist. Please check with your doctor before you begin, and tell Pinki about anything your doctor has flagged." },
  { q: "Can I join online if I don’t live in Dhanbad?",
    a: "Yes. Classes run live online, and students practise from Delhi, Mumbai, Bangalore, Hyderabad, Pune, Kolkata and beyond. In-person sessions are held in Dhanbad, Jharkhand." },
  { q: "When are the batches?",
    a: "Morning batches run between 8:00 AM and 12:00 PM, three times a week. Evening batches run from 5:00 PM to 7:00 PM. Message Pinki and she will suggest the batch that fits your routine." },
  { q: "Do you offer private 1:1 sessions?",
    a: "Private 1:1 sessions are reserved for pregnant women, so the practice can follow your pregnancy week by week. Everyone else joins a small group batch." },
  { q: "How do I start, and what does it cost?",
    a: "Send a WhatsApp message with where you are in your journey. Pinki replies personally with batch timings, fees and the session that suits you. Customised diet plans are an optional add-on from ₹3,500 a month." },
  { q: "What if it isn’t right for me?",
    a: "A refund can be requested after your first live session. After more than one session, fees are non-refundable. The full policy is on the terms page." },
];

export const NAV = [
  { href: "/offerings", key: "offerings", label: "Offerings" },
  { href: "/about", key: "about", label: "About Pinki" },
  { href: "/schedule", key: "schedule", label: "Schedule" },
  { href: "/testimonials", key: "testimonials", label: "Stories" },
  { href: "/gallery", key: "gallery", label: "Gallery" },
  { href: "/diet", key: "diet", label: "Diet plans" },
  { href: "/contact", key: "contact", label: "Contact" },
];
