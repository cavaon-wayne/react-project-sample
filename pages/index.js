import React from 'react';
import Container from '@material-ui/core/Container';
import PostList from '@/components/posts/list';
import UserList from '@/components/users/list';

class HomePage extends React.Component {
  render() {
    return (
      <Container maxWidth="lg">
        <PostList />
        <UserList />
      </Container>
    );
  }
}

export default HomePage;
