var ar = getCharFrequency("Find the frequency of characters inside a string");
println(JSON.stringify(ar));

function getCharFrequency(text)
{
    var ar = [];

    for(var chr of text)
    {
        updateFrequency(ar, chr);
    }
    
    return ar;
}

function updateFrequency(ar, chr)
{
    for(var el of ar)
    {
        if (el.chr === chr)
        {
            el.count++;
        }
    }
    
    ar.push({ chr : chr, count : 1 });
}