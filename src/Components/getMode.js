export function getMode(mode)
{
    if(mode==='Metro')
        mode="mode_4"
    else if(mode==='Walk / Bicycle')
        mode='mode_4'
    else if(mode==='Ride-hailing Car')
        mode='mode_5'
    else if(mode==='Auto')
        mode='mode_7'
    else if(mode==='Own Car')
        mode='mode_8'
    else if(mode==='Own two-wheeler')
        mode="mode_9"
    else
        mode='mode_1'
    return mode;
}

