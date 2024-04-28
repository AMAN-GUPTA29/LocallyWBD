import React from "react";
import Card from "./_CustomerViewCard";
// import _CustomerViewCard from "./_CustomerViewCard";

export default ({ data }) => {
    const array = data.map(({id, photo, title, tag, description, charge}) => <Card key={id} photo={photo} title={title} tag={tag} description={description} charge={charge} />);
    return (
        <div>
            {array}
        </div>
    )
}