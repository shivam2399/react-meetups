import MeetupList from "@/components/meetups/MeetupList"


const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A first meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Los_Angeles_with_Mount_Baldy.jpg/1024px-Los_Angeles_with_Mount_Baldy.jpg',
        address: 'Some random address'
    },
    {
        id: 'm2',
        title: 'A second meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Los_Angeles_with_Mount_Baldy.jpg/1024px-Los_Angeles_with_Mount_Baldy.jpg',
        address: 'Some random address 2'
    }

];

const HomePage = () => {
    
    return (
     <MeetupList meetups={DUMMY_MEETUPS} />
  )
}


export default HomePage;
