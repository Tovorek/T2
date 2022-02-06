

function countWords(text)
{
    var wasSeparator = true;
    var words = 0;
    
    for(var c of text)
    {
        
        if (isSeparator(c))
        {
            wasSeparator = true;
            continue;
        }

        if (wasSeparator)
        {
            words++;
            wasSeparator = false;
        }
    }
    
    return words;
}

function isSeparator(c)
{
    var separators = [" ", "\t", "\n", "\r", ",", ";", ".", "!", "?"];
    return separators.includes(c);
}

println(countWords(""));
println(countWords("            "));
println(countWords("Napolean!!!   "));
println(countWords("     Bonaparte"));
println(countWords("    Napolean in Waterloo      "));
println(countWords("Napolean lost in the Battle of Waterloo"));