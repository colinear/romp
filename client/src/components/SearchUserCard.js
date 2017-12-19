import React from 'react';
import { Card, Icon, Image, Grid } from 'semantic-ui-react';
import { Link } from 'react-router';

const SearchUserCard = ({ user }) => {
  console.log('user in card: ', user);
  return (
    <Card as={Link} to={`/user/${user.username}`} fluid color="red" header="Option 1">
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <Image src={user.profilePicURL} size="medium" />
          </Grid.Column>

          <Grid.Column>
            aaaaaaaaaaaaaaaa
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Card>
  );
};

// const SearchUserCard = ({ user }) => {
//   console.log('user in card: ', user);
//   return (
//     <Link to={`/user/${user.username}`}>
//       <Card fluid style={{minWidth: '100%'}}>
//         <Image src={user.profilePicURL} />
//         <Card.Content>
//           <Card.Header>{user.username}</Card.Header>
//           <Card.Meta>User since May, 2017.</Card.Meta>
//           <Card.Description>1337 Gamer living in San Francisco, CA. Willing to hang out with anybody.</Card.Description>
//         </Card.Content>
//         <Card.Content extra>
//           <a>
//             <Icon name="user" />
//             10 Friends
//           </a>
//         </Card.Content>
//       </Card>
//     </Link>
//   );
// };

export default SearchUserCard;
