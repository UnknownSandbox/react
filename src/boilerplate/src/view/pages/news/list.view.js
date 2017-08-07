import React from 'react';
import ItemView from './item.view';

export default ({news = []}) => (
    <div>
        {
            news.map((newsItem, key) => {
                return (
                    <ItemView newsItem={newsItem} key={key}/>
                );
            })
        }
    </div>
);

;