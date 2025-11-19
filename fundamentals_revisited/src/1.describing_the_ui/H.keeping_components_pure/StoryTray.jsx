export default function StoryTray({ stories }) {
  const createStory = {
    id: 'create',
    label: 'Create Story'
  };
  const newStories = [...stories, createStory]

  return (
    <ul>
      {newStories.map(story => (
        <li key={story.id}>
          {story.label}
        </li>
      ))}
    </ul>
  );
}
