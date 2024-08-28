import styles from './styles.module.css';
import Post from './../post';

export default function PostList({ posts }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Список постов</h1>
      <ul className={styles.post_list}>
        {posts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </ul>
      <button className={styles.btn_next}>Далее</button>
    </div>
  );
}
