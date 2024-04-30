import React from "react";
import Card from "./_CustomerViewCard";
// import _CustomerViewCard from "./_CustomerViewCard";

export default ({ data }) => {
    const array = data.map(({_id, title, tag,charge, description,pointer}) => <Card key={_id} _id={_id} title={title} tag={tag} description={description} charge={charge} pointer={pointer}/>);
    return (
        <div>
            {array}
        </div>
    )
}