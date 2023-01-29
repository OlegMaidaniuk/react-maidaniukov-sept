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
        </div>
    );
};
export {Simpson};