import React from 'react';
import { Iscans } from '../models';

interface ScanIscan {
    Scanresult: Iscans
} 

export function Homevuln(props: ScanIscan) {
    console.log(props)
    return (
    <div>
        { props.Scanresult.results[0].end_col_offset }
        </div>
    );
}