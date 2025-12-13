import Heading from "./Heading";
import Section from "./Section";

export default function Page() {
    return (
        <Section>
            <Heading>My Profile</Heading>
            <Post 
                title="Hello Traveller!"
                body="Read about my adventures"
            />
            <AllPosts />
        </Section>
    )
}

function AllPosts() {
    return (
        <Section>
            <Heading>Posts</Heading>
            <RecentPosts />
        </Section>
    )
}

function RecentPosts() {
    return (
        <Section>
            <Heading>Recent Posts</Heading>
            <Post 
                title="Flavors of Lisbon"
                body="...those pasteis de nata!"
            />
            <Post 
                title="Buenos Aires in the rhythm of tango"
                body="I loved it!"
            />
        </Section>
    );
}

interface PostProps {
    title: string,
    body: string
}

function Post({
    title, 
    body
 }: PostProps) {
    return (
        <Section>
            <Heading>
                {title}
            </Heading>
            <p><i>{body}</i></p>
        </Section>
    )
}