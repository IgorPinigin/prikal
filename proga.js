function prikal(n)
{
    let counter = n;
    if (counter < 0)
    {
        return 0;
    }
    else
    {
        console.log(counter);
        counter = counter-1;
        return  setTimeout(prikal, 1000, counter);
    }
}
let c = 30;
prikal(c);
