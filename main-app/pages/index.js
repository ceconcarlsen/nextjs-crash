import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "First meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/ca/ChristChurchCathedral1_gobeirne.jpg",
    address: "São Paulo",
    description: "This is a first meetup",
  },
  {
    id: "m2",
    title: "Second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/ca/ChristChurchCathedral1_gobeirne.jpg",
    address: "São Paulo",
    description: "This is a Second meetup",
  },
  {
    id: "m3",
    title: "Third meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/ca/ChristChurchCathedral1_gobeirne.jpg",
    address: "São Paulo",
    description: "This is a Third meetup",
  },
];

export default function HomePage() {
  return (
    <>
      <MeetupList meetups={DUMMY_MEETUPS} />
    </>
  );
}
