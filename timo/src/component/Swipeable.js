import * as React from 'react';
import { Button, Drawer, theme } from 'antd';
import { useState } from 'react';
import Map from './Map';
import Nav from './Navar';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import './mapstyle.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('e편한세상 110동 놀이방', '수용인원: 1~8명'),
    createData('e편한세상 중앙심터', '수용인원: 1~6명'),
    createData('불광1동 행정복지센터 2층', '수용인원: 4~12명'),

];

const App = () => {
    const { token } = theme.useToken();
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };


    return (
        <div >
            <Nav />
            <Map />
            <div>
                <HorizontalRuleIcon type="primary" onClick={showDrawer} style={{ fontSize: '50px', color: '#CBE23A' }} />
            </div>
            <Drawer
                placement="bottom"
                closable={false}
                onClose={onClose}
                open={open}
                getContainer={false}
                style={{ borderTopLeftRadius: '30px', borderTopRightRadius: '30px' }}
            >
                <div>
                    <HorizontalRuleIcon type="primary" onClick={showDrawer} style={{ fontSize: '50px', marginTop: '-20px', color: '#CBE23A' }} />
                </div>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem>
                        <ListItemText >
                            <div style={{ fontSize: '12px', color: 'gray' }}>

                                사용시간: 10:00AM~17:00PM &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 수용인원:1~8명
                            </div>
                        </ListItemText>
                    </ListItem>
                    <Divider className='Divider' />
                    <ListItem>
                        <ListItemText >
                            <div style={{ fontSize: '12px', color: 'gray' }}>

                                사용시간: 10:00AM~17:00PM &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 수용인원:1~8명
                            </div>
                        </ListItemText>
                    </ListItem>
                    <Divider className='Divider' />
                    <ListItem>
                        <ListItemText >
                            <div style={{ fontSize: '12px', color: 'gray' }}>
                                사용시간: 10:00AM~17:00PM &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 수용인원:1~8명
                            </div>
                        </ListItemText>
                    </ListItem>
                    <Divider className='Divider' />
                    <ListItem>
                        <ListItemText >
                            <div style={{ fontSize: '12px', color: 'gray' }}>
                                사용시간: 10:00AM~17:00PM &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 수용인원:1~8명
                            </div>
                        </ListItemText>
                    </ListItem>

                    <Divider className='Divider' />
                    <ListItem>
                        <ListItemText >
                            <div style={{ fontSize: '12px', color: 'gray' }}>
                                사용시간: 10:00AM~17:00PM &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 수용인원:1~8명
                            </div>
                        </ListItemText>
                    </ListItem>

                    <Divider className='Divider' />
                    <ListItem>
                        <ListItemText >
                            <div style={{ fontSize: '12px', color: 'gray' }}>
                                사용시간: 10:00AM~17:00PM &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 수용인원:1~8명
                            </div>
                        </ListItemText>
                    </ListItem>


                </List>

                <Button style={{ backgroundColor: '#CBE23A', color: 'black', width: '90%', justifyContent: 'end' }}>
                    예약하기
                </Button>

            </Drawer>
        </div>
    );
};
export default App;