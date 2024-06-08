import { useFrame, useLoader } from "@react-three/fiber"
import { useRef, useLayoutEffect } from "react"
import { Mesh } from 'three'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader.js"

export default function Pill(props: {color: string[]}) {
    const { color } = props
    const mesh = useRef<Mesh>(null!)

    useLayoutEffect(() => {
        if (mesh.current.children[0]) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const meshCurrentChildren: any = mesh.current.children[0];
            
            meshCurrentChildren.material[0].color = {
                r: color[0],
                g: color[1],
                b: color[2],
                isColor: true,
            }
        }
    }, [color])

    useFrame(() => {
        mesh.current.rotation.x += 0.01
        mesh.current.rotation.y += 0.01
        mesh.current.rotation.z += 0.01
    })

    const materials = useLoader(MTLLoader, './pill.mtl');
    const obj = useLoader(OBJLoader, './pill.obj', (loader) => {
      materials.preload();
      loader.setMaterials(materials);
    });
  
    return <primitive object={obj} scale={2} ref={mesh}/>

}