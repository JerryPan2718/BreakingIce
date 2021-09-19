import React from "react";
import logo from '../user-profile-modified.png';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';


// import { View, StyleSheet, Text } from 'react-native';

const Profile = () => (
    <div>
        <Container maxWidth="md">
            <Box sx={{ bgcolor: '#cfe8fc', height: '40vh' }}>

                <h1 className="profile_page" className="title is-1">Profile</h1>
                {/* <View style={styles.leftContainer}>
            <Text style={[styles.text, { textAlign: 'left' }]}>
                {'<'}
            </Text>
        </View> */}
                <img src={logo} alt="Logo" />;
            </Box>
        </Container>
    </div>
);

// const styles = StyleSheet.create({
//     navBar: {
//         height: 60,
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         backgroundColor: 'blue',
//     },
//     leftContainer: {
//         flex: 1,
//         flexDirection: 'row',
//         justifyContent: 'flex-start',
//         backgroundColor: 'green'
//     },
//     rightContainer: {
//         flex: 1,
//         flexDirection: 'row',
//         justifyContent: 'flex-end',
//         alignItems: 'center',
//         backgroundColor: 'red',
//     },
//     rightIcon: {
//         height: 10,
//         width: 10,
//         resizeMode: 'contain',
//         backgroundColor: 'white',
//     }
// });

export default Profile;
