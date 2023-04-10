import { useState, useEffect } from "react";
import { render, screen } from "@testing-library/react";
import { expect, test, describe } from "vitest";

//IMPORTAR COMPONENTES
import PingsCards from "./PingsCards";

import { pings } from "../App";

// La funcion describe nos permite agrupar distintos test.
// "test" son los test unitarios. Algo dento del componente.

//expect(1 + 1).toBe(2); //Asercion querer comprobar una linea de codigo.

describe('PingsCards', () => {
    test('Should be the title of Original Products', () => {

        render( 
            <PingsCards pings={pings} />
        );
        expect(screen.getByText('Original Products')).toBeDefined() //Es como un querySelector
    });

    test('Should show title all the time')
}); 