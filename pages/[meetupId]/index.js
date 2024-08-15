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

export async function getStaticPaths() {
    return {
        fallback: false,
        paths: [
            { 
             params: {
                meetupId: 'm1'
             },
            },
            { 
             params: {
                meetupId: 'm2'
             },
            },
            { 
             params: {
                meetupId: 'm3'
             },
            }
        ]
    }
} 

export async function getStaticProps(context) {

    const meetupId = context.params.meetupId


    return {
        props: {
            meetupData: {
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Los_Angeles_with_Mount_Baldy.jpg/1024px-Los_Angeles_with_Mount_Baldy.jpg',
                id: meetupId,
                title: 'First Meetup',
                address: 'Some Street 5, Some City',
                description: 'This is a first meetup'
            }
        }
    }
}
 

export default MeetupDetails;