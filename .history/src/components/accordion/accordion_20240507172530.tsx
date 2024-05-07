import react, {useState} from 'react'


interface Props {
    text: {
        name:string,
        description: string
    }[]
}

const Accordion: React.FC<Props> = ({text}) => {

    const [expandedIndices, setExpandedIndices] =
    useState<number[]>([])

    const [isHovered, setIsHovered] =
     useState<number | null>(null)

     function handleMouseEnter(index:number){
        setIsHovered(index)
     } 

     function handleMouseLeave(){
        setIsHovered(null)
     }

     function handleSectionClick(index:number){
        if(expandedIndices.includes(index)){
            expandedIndices.remove(index)
        }
        else{
            const newExpandedIndices = [...expandedIndices,index]

            setExpandedIndices(newExpandedIndices)
        }
     }

    return (
        <section>

        </section>
    )
}