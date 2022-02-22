import './styles.css'
import { PostCard } from '../PostCard'

export const Posts = ({posts = []}) => (
    <div className="posts">
        {posts.map(post => (
            <PostCard
                key={post.id} // Devido ao map deve haver uma key
                title={post.title}
                body={post.body}
                cover={post.cover}
                id={post.id}
            />
        ))}
    </div>
)