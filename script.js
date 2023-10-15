var input = document.getElementById('input'),
    output = document.getElementById('output'),
    iType = document.getElementById('IType'),
    OType = document.getElementById('OType'),
    ITypevalue,OTypevalue;

input.addEventListener('keyup',result)
iType.addEventListener('change',result)
OType.addEventListener('change',result)

ITypevalue = iType.value
OTypevalue = OType.value



function result(){
    ITypevalue = iType.value
    OTypevalue = OType.value

    
    if(ITypevalue === 'Kilometer' && OTypevalue === 'Kilometer'){
        output.value = input.value
    }
    else if(ITypevalue === 'Kilometer' && OTypevalue === 'Meter'){
        output.value=Number(input.value)*1000
    }
    else if(ITypevalue === 'Kilometer' && OTypevalue === 'Centimeter'){
        output.value=Number(input.value)*100000
    }
    else if(ITypevalue === 'Kilometer' && OTypevalue === 'Millimeter'){
        output.value=Number(input.value)*1000000
    }


    if(ITypevalue === 'Meter' && OTypevalue === 'Kilometer'){
        output.value=Number(input.value)*0.001
    }
    else if(ITypevalue === 'Meter' && OTypevalue === 'Meter'){
        output.value=input.value
    }
    else if(ITypevalue === 'Meter' && OTypevalue === 'Centimeter'){
        output.value=Number(input.value)*100
    }
    else if(ITypevalue === 'Meter' && OTypevalue === 'Millimeter'){
        output.value=Number(input.value)*1000
    }


    if(ITypevalue === 'Centimeter' && OTypevalue === 'Kilometer'){
        output.value=Number(input.value)*0.00001
    }
    else if(ITypevalue === 'Centimeter' && OTypevalue === 'Meter'){
        output.value=Number(input.value)*0.01
    }
    else if(ITypevalue === 'Centimeter' && OTypevalue === 'Centimeter'){
        output.value=input.value
    }
    else if(ITypevalue === 'Centimeter' && OTypevalue === 'Millimeter'){
        output.value=Number(input.value)*10
    }


    if(ITypevalue === 'Millimeter' && OTypevalue === 'Kilometer'){
        output.value=Number(input.value)*0.000001
    }
    else if(ITypevalue === 'Millimeter' && OTypevalue === 'Meter'){
        output.value=Number(input.value)*0.0001
    }
    else if(ITypevalue === 'Millimeter' && OTypevalue === 'Centimeter'){
        output.value=Number(input.value)*0.01
    }
    else if(ITypevalue === 'Millimeter' && OTypevalue === 'Millimeter'){
        output.value=input.value
    }
   
}