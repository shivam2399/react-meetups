import MeetupDetail from "@/components/meetups/MeetupDetail";

const MeetupDetails = () => {
    return (
        <>
         <MeetupDetail
          image='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Los_Angeles_with_Mount_Baldy.jpg/1024px-Los_Angeles_with_Mount_Baldy.jpg'
          title= 'First Meetup'
          address= 'Some Street 5, Some City'
          description= 'This is a first meetup'   
         />
        </>
    )
}

export default MeetupDetails;