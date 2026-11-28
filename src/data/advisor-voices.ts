/** Anonymous quotes already published in the six sections listed in Grova's inventory.
 * The current source contains the 25 advisor quotes plus 9 founder quotes.
 * Keep them all, with role-only attribution; no new testimonials.
 */
import { familiar, buildFamiliar } from "./sound-bites";

export const advisorVoices = [
  { quote: "Most people are talking with that founder around just the business side of the equation. They're not asking questions about the personal side.", name: "Wealth advisor" },
  { quote: "I think that's a gap… dealing with the personal side and making sure that they're personally ready.", name: "Exit advisor" },
  { quote: "They aren't ready to let go even though their company is for sale. … They tend to nitpick every buyer… and they blow up their own deals.", name: "Exit advisor" },
  { quote: "I can do my best work if I get someone before an LOI.", name: "Wealth advisor" },
  { quote: "How do I even bring it up in a productive way?", name: "Exit advisor" },
  { quote: "I'm not going to deal with all three. … But we need somebody to support you in all three.", name: "Exit advisor" },
  { quote: "Remember that founder has probably not built a business and sold one before. So they have no idea what's coming.", name: "Wealth advisor" },
  { quote: "They are actually better sellers because less of their identity is attached, which means they're less likely to just say no to every buyer.", name: "Exit advisor" },
  { quote: "Do they know they need it early? Maybe not. But they certainly will know when the transaction closes.", name: "Exit advisor" },
  { quote: "This isn't like going to therapy because there's something wrong with you… this is how this goes.", name: "Exit advisor" },
  { quote: "Let's talk about why you're doing this, what the real reasons are.", name: "Sell-side M&A advisor" },
  { quote: "Maybe we're a year and a half out.", name: "Founder" },
  { quote: "The truth is, I have no idea.", name: "Founder" },
  { quote: "It would make sense maybe to start to get clarity on the human part of it, a year prior to that.", name: "Founder" },
  { quote: "They get so tunnel focused on making it happen that they don't necessarily plan for their own finances or their own careers or their happiness.", name: "Exit advisor" },
  { quote: "Leading up to a transaction is very stressful.", name: "Exit advisor" },
  { quote: "They really want to exit, but they're just scared. They're putting the brakes on.", name: "Exit advisor" },
  { quote: "All of a sudden I look back and 10 years had passed.", name: "Founder" },
  { quote: "I have a hard time really disconnecting myself from the day-to-day.", name: "Founder" },
  { quote: "You always have differing degrees of cold feet the closer you get to the transaction.", name: "Sell-side M&A advisor" },
  { quote: "You don't know what life looks like without the company.", name: "Founder" },
  { quote: "The earlier the better… No one thinks about what is going to happen when they have it.", name: "Exit advisor" },
  { quote: "After the fact, it's trying to pick up the pieces.", name: "Exit advisor" },
  ...buildFamiliar,
  ...familiar,
];
