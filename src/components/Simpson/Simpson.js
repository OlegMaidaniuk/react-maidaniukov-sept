const Simpson = (props) => {
    const {name,surname,size,image,age}=props;
    console.log(props);
    return (
        <div>
            <div>name:{name}</div>
            <div>surname:{surname}</div>
            <div>size:{size}</div>
            <img src={image} alt={name}/>
            <div>age:{age}</div>

            {/*<div>name Homer</div>*/}
            {/*<div>surname Simpson</div>*/}
            {/*<img src="https://images.prom.ua/2472016152_w640_h640_kruzhka-s-printom.jpg" alt="homer"/>*/}

            {/*<div>name Homer</div>*/}
            {/*<div>surname Simpson</div>*/}
            {/*<img src="https://images.prom.ua/2472016152_w640_h640_kruzhka-s-printom.jpg" alt="homer"/>*/}
        </div>
    );
};
export {Simpson};