// const stories = [
//   {
//     name: 'Jeff Bezoz',
//     src: 'https://links.papareact.com/k2j',
//     profile: 'https://links.papareact.com/f0p'
//   },
// {
//     name: 'Mark Zuckerberg',
//     src: 'https://links.papareact.com/xql',
//     profile: 'https://links.papareact.com/snf'
//   },
// {
//     name: 'Bill Gates',
//     src: 'https://links.papareact.com/4u4',
//     profile: 'https://links.papareact.com/zvy'
//   },
// {
//     name: 'Elon Musk',
//     src: 'https://links.papareact.com/kxk',
//     profile: 'https://links.papareact.com/kxk'
//   }
//
// ]
import StoryCard from './StoryCard.jsx'


const Stories = ({ stories }) => {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map((story, i) => (
      <StoryCard key={i} name={story.name} src={story.src} profile={story.profile} />
      ))}
      
    </div>
  )
}

export default Stories
