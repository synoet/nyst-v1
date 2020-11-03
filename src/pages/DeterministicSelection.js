import React, {useState, useEffect, memo} from 'react'
import styled from 'styled-components'
import GlobalStyles from '../styles/GlobalStyle'
import Helmet from 'react-helmet'
import favicon from '../images/favicon.ico'

// function selection(l, k, choosePivot){
//     if(l.lenth() == 1){
//         if(k == 0){
//             return l[0]
//         } 
//     }

//     pivot = pivot 
// }


const SelectionSection = styled.div`
justify-content: center;
background-color: var(--background)
font-size: 16px;
max-width: 100vw;
align-items: center;
text-align: center;
height: 150vh;
`;

const Container = styled.div`
text-align: center;

`;

const ArrayContainer = styled.div`

.inner {
    display: inline-block;
    width: 15px;
}



`;

const StyledArray = styled.ul`
list-style-type: none;
display: grid;
grid-template-columns: repeat(50, minmax(30px, 40px));
justify-content: center;
animation: fadeIn ease 5s;
@keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
    }

.h-item {
    font-size: 14px;
    margin-left: 5px;
    list-decoration-style: none;
    display: inline;
    border: 1px solid white;
    padding: 5px;
    width: 20px;
    
}
.v-item {
    font-size: 14px;
    margin-top: 5px;
    border: 1px solid white;
    padding: 5px;
    width: 20px;
    list-decoration-style: none;
    
}
.v-item-highlight {
    font-size: 14px;
    margin-top: 5px;
    border: 2px solid red;
    padding: 2px;
    width: 20px;
    list-decoration-style: none;
    
}
.v-item-highlight-sorted {
    font-size: 14px;
    margin-top: 5px;
    border: 2px solid blue;
    padding: 2px;
    width: 20px;
    list-decoration-style: none;
    
}
.v-item-median {
    font-size: 14px;
    margin-top: 5px;
    border: 2px solid #ff71ce;
    padding: 2px;
    width: 20px;
    list-decoration-style: none;
    
}
.v-item-small {
    font-size: 14px;
    margin-top: 5px;
    border: 2px solid #0c4d48;
    padding: 2px;
    width: 20px;
    list-decoration-style: none;
    
}
.v-item-big {
    font-size: 14px;
    margin-top: 5px;
    border: 2px solid #f7347a;
    padding: 2px;
    width: 20px;
    list-decoration-style: none;
    
}
`;

const StepOne = styled.div`
animation: fadeIn ease 5s;
@keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
    }
input {
    background-color: var(--dark-background);
    border: 2px solid white;
    padding: 5px;
    color: white;
    border-radius: 5px;
    font-size: 20px;

}

button {
    background-color: var(--dark-background);
    color: var(--green);
    padding: 5px;
    font-size: 20px;
    margin-left: 10px;
    border-radius: 5px;
    border: 2px solid var(--green);

}
`;

const StepTwo = styled.div`
animation: fadeIn ease 5s;
@keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
    }
button {
    background-color: var(--dark-background);
    color: var(--green);
    padding: 5px;
    font-size: 20px;
    margin-left: 10px;
    border-radius: 5px;
    border: 2px solid var(--green);

}
`;
const StepThree = styled.div`

button {
    background-color: var(--dark-background);
    color: var(--green);
    padding: 5px;
    font-size: 20px;
    margin-left: 10px;
    border-radius: 5px;
    border: 2px solid var(--green);

}
`;

const StepFour = styled.div`
animation: fadeIn ease 5s;
@keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
    }
button {
    background-color: var(--dark-background);
    color: var(--green);
    padding: 5px;
    font-size: 20px;
    margin-left: 10px;
    border-radius: 5px;
    border: 2px solid var(--green);

}
`;

const StepFive = styled.div`
animation: fadeIn ease 5s;
@keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
    }
button {
    background-color: var(--dark-background);
    color: var(--green);
    padding: 5px;
    font-size: 20px;
    margin-left: 10px;
    border-radius: 5px;
    border: 2px solid var(--green);

}

.key {
    color: white;
    font-size: 18px;

    .green {
        background-color: #0c4d48;
        color: #0c4d48;
        padding: 5px;
    }

    .red{
        background-color: #f7347a;
        color: #f7347a;
        padding: 5px;

    }
    .pink {
        background-color: #ff71ce;
        color: #ff71ce;
        padding: 5px;
        
    }
}
`;

const SectionTitle = styled.h2`
font-size: 20px;
color: var(--white);


`;



const getRandomInt = (max) =>  {
    return Math.floor(Math.random() * Math.floor(max));
}

const DS = () => {
    const splitSize = 5
    const [initArray, setInitArray] = useState([])
    const [arrayText, setArrayText] = useState('')
    const [arrayLength, setArrayLength] = useState('100')
    const [rankText, setRankText] = useState('')
    const [splitArrays, setSplitArrays] = useState([])
    const [sortedSplitArrays, setSortedSplitArrays] = useState([])
    const [rank, setRank] = useState(0)
    const [final, setFinal] = useState(false)

    const [sortAll, setSortAll] = useState(false)
    const [sortedAllArrays, setSortedAllArrays] = useState([])

    const [arrayMediums, setArrayMediums] = useState([])

    const [median, setMedian] = useState(false)

    const [counter, setCounter] = useState(1)

    const handleChange = (event) => { //handle input for adding a value to the array
        const txt = event.target.value;
        setArrayText(txt);
    }

    const handleLengthChange = (event) => { // handle length for input
        const txt = event.target.value;
        setArrayLength(txt)
    }

    const handleRankChange = (event) => {
        const txt = event.target.value;
        setRankText(txt)

        setRank(parseInt(txt))
    }

    const onRandGenerate = () => {
        setCounter(counter + 1);
        let length = parseInt(arrayLength);
        let tempArray = []

        for (let idx = 0; idx < length; idx ++){
            tempArray.push(getRandomInt(100))
        }
        setInitArray(tempArray);
    }


    const onSubmit = () => { //handling adding a value to an array
        let tempArray = initArray
        tempArray.push(parseInt(arrayText))
        setInitArray(tempArray)
        setArrayText('');
    }

    const handleSearch = () => {
        splitArray();

    }

    const splitArray = () => {
        let tempArray = []
        for(let idx = 0; idx < Math.floor(initArray.length / splitSize); idx++){
            let currPos = idx * splitSize
            let endPos = currPos + splitSize
            let tempArrayBC = []
            for(currPos; currPos < endPos; currPos++){
                tempArrayBC.push(initArray[currPos])
            }
            tempArray.push(tempArrayBC)
        }
        setSplitArrays(tempArray)
        setCounter(counter + 1);
    }

    const sortSplit = () => {
        let length = Math.floor(initArray.length / splitSize)
        let tempArray = splitArrays
        let newArray = []

        for(let idx = 0; idx < length; idx++){

            newArray.push(tempArray[idx].sort((a,b)=>a-b).reverse())
        }
        setSplitArrays(newArray);
        setCounter(counter + 1);
    }

    const findGroupMedian = () => {
        setMedian(true)
        setCounter(counter + 1);

    }


    const onClear = () => {
        setInitArray([])
    }

    const sortAllGroups = () => {
        let tempArray = Array.from(splitArrays)
        tempArray.sort( function( a, b )
        {
        if ( a[2] === b[2] ) return 0;
        return a[2] < b[2] ? -1 : 1;
        });

        console.log( tempArray );
        setSortedAllArrays(tempArray)
        setSortAll(true)
        setCounter(counter + 1);
        
    }

    const findSmallBig = () => {
        setFinal(true)

    }



    // const displayArray
    return (
        <div className = 'root'>
            <Helmet>
                <link rel="icon" href={favicon} />
                <title>Deterministic Selection</title>
            </Helmet>
            <GlobalStyles/>
            <SelectionSection>
                <Container>
                <h1> Deterministic Selection Search</h1>

                <StepOne>
                    <SectionTitle>1. Generate an Array of size N, of random integers.</SectionTitle>
                    <input onChange = {handleLengthChange} value = {arrayLength} placeholder = "n = (length)"></input>
                    <button onClick = {onRandGenerate}> Generate </button>
                    <StyledArray className = 'outer'>
                        {initArray.map((select, index) => {
                            return (<li className = 'h-item'>{select}</li>)
                        })}
                    </StyledArray>

                </StepOne> 
                {(counter >= 2 ? 
                        <StepTwo>
                        <SectionTitle>2. Split into groups of 5.</SectionTitle>
                        <button onClick = {splitArray}>Split into Groups</button>
                        <SectionTitle>3.Sort each group from lowest to highest(bottom to top)</SectionTitle>
                        <button onClick = {sortSplit}>Sort Groups</button>
                        <ArrayContainer>
                        {splitArrays.map((select, index) => {
                                return (
                                    <StyledArray className = 'inner'>
                                        {select.map((value, idx) => {
                                            return <li className = 'v-item'>{value}</li>
                                        })}

                                    </StyledArray>
                                )
                            })}
                    </ArrayContainer>
                    </StepTwo>

                : ' ')}
                {(counter >= 4 ?
                        <StepThree>
                        <SectionTitle>4. Find the Median of each group of 5</SectionTitle>
                        <button onClick = {findGroupMedian}>Find Group Median</button>
                        
                        <ArrayContainer>
                        {median? splitArrays.map((select, index) => {
                                return (
                                    <StyledArray className = 'inner'>
                                        {select.map((value, idx) => {
                                            if (idx == 2){
                                                    return <li className = 'v-item-highlight'>{value}</li>
                                            }else {
                                                return <li className = 'v-item'>{value}</li>
                                                
                                            }
                                        })}
    
                                    </StyledArray>
                                )
                            }): ''}
                    </ArrayContainer>
                    </StepThree>

                : ' ')}

                {(counter >= 5 ? 
                        <StepFour>
                        <SectionTitle>5. Sort Groups by the Median of each Group</SectionTitle>
                        <button onClick = {sortAllGroups}>Sort All Groups</button>
                        <ArrayContainer>
                        {sortAll? sortedAllArrays.map((select, index) => {
                                return (
                                    <StyledArray className = 'inner'>
                                        {select.map((value, idx) => {
                                            if (idx == 2){
                                                    return <li className = 'v-item-highlight-sorted'>{value}</li>
                                            }else {
                                                return <li className = 'v-item'>{value}</li>
                                                
                                            }
                                        })}
    
                                    </StyledArray>
                                )
                            }): ''}
                    </ArrayContainer>
                    </StepFour>
                : ' ')}

                {(counter >= 6 ? 
                        <StepFive>
                        <SectionTitle>6.Find elements smaller and Bigger then the Median of Medians</SectionTitle>

                        <button onClick = {findSmallBig}>Show Smaller and Bigger</button>
                        <ArrayContainer>
                        {final? sortedAllArrays.map((select, index) => {
                                return (
                                    <StyledArray className = 'inner'>
                                        {select.map((value, idx) => {
                                            if(index <= Math.floor((initArray.length / splitSize)/2)){
                                                if (idx > 2){
                                                    return <li className = 'v-item-small'>{value}</li>    
                                                }else if (idx == 2){
                                                    if(index === Math.floor((initArray.length / splitSize)/2)){
                                                        return <li className = 'v-item-median'>{value}</li>
                                                    }else {
                                                        return <li className = 'v-item-small'>{value}</li>

                                                    }
                                                }else {
                                                    return <li className = 'v-item'>{value}</li>

                                                }
                                                    

                                            }else {
                                                if (idx < 3){
                                                    if(index === Math.floor((initArray.length / splitSize)/2)){
                                                        return <li className = 'v-item-median'>{value}</li>
                                                    }else {
                                                        return <li className = 'v-item-big'>{value}</li>
            
                                                    }
                                                        
                                                }else {
                                                    return <li className = 'v-item'>{value}</li>
                                                    
                                                }
                                            }

                                        })}

                                    </StyledArray>
  
                                )
                            }): ''}
                    </ArrayContainer>
                    {final? 
                        <div className = 'key'>
                        <p className = 'key'><span className = 'green'>A</span> = Smaller then Median, <span className = 'red'>B</span> = Greater then Median, <span className = 'pink'>C</span> = Median of Medians</p>
                        </div>
                    : ' '}

                    </StepFive>
                : ' ')}





                {/* <br></br>
                <input onChange = {handleRankChange} value = {rankText} placeholder = 'desired rank'></input>
                <button onClick = {onClear}> Clear Array</button>
                <br></br> */}
                {/* <button onClick = {splitArray}>Split into Groups</button> */}
                
                
                












                </Container>
            </SelectionSection>
        </div>
        
    )
}

export default DS;