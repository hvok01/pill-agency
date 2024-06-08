import Pill from "../pill/Pill";

export default function Scene(props: {color: string[]}) {

    return (
        <>
            <ambientLight intensity={1} />
            <directionalLight />
            <Pill color={props.color}/>
        </>
    )
  }