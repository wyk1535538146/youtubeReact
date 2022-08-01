import React, {useEffect, useState} from 'react';
import 'antd/dist/antd.css';
import './home.css';
import axios from 'axios';
import {Form, Input, List, Avatar, Space} from "antd";
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';

const {Search} = Input;

const baseUrl = 'http://localhost:8080';



//官方给的data数据源代码
/*const data = Array.from({
    length: 23,
}).map((_, i) => ({
    href: 'https://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://joeschmoe.io/api/v1/random',
    description:
        'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
        'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
}));*/

const IconText = ({ icon, text }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);

const Home = () => {


    let [data, setData] = useState([]);
    const onSearch = (value) => {

        console.log(value)
        const url = baseUrl + '/search?inputText=' + value;
        axios.get(url).then((res) => {
            setData(res.data.items)
            console.log(res);
            console.log(data);
        })
    };


    return(
        <div className='bg'>
            <div className='search'>
                <Search
                    placeholder="input search text"
                    onSearch={onSearch}
                    size={"large"}
                    style={{
                        width: 400,
                    }}
                />
            </div>
            <div>
                <List
                    itemLayout="vertical"
                    size="small"
                    pagination={{
                        onChange: (page) => {
                            console.log(page);
                        },
                        pageSize: 3,
                    }}
                    dataSource={data}
                    //列表底部信息
                    /*footer={
                        <div>
                            <b>ant design</b> footer part
                        </div>
                    }*/
                    renderItem={(item) => (
                        <List.Item
                            key={item.id.videoId}
                            actions={[
                                <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                                <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                                <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                            ]}
                            extra={
                                <img
                                    width={item.snippet.thumbnails.medium.width}
                                    alt="logo"
                                    src={item.snippet.thumbnails.medium.url}
                                />
                            }
                        >
                        <List.Item.Meta
                            /*avatar={<Avatar src={item.snippet.thumbnails.default.url} />}*/
                            title={<a href={item.href}>{item.snippet.title}</a>}
                            description={item.snippet.description}
                        />
                            {item.content}
                        </List.Item>
                    )}
                />
            </div>
        </div>
    );
};

export default Home;
