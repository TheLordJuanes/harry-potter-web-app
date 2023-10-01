import React from 'react';
import {Button, Card} from "react-daisyui";

export default function ElementCard() {
    return (
        <div>
            <Card className="max-w-sm mx-auto overflow-hidden shadow-lg" side="lg">
                <Card.Image src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
                <Card.Body>
                    <Card.Title tag="h2">Shoes!</Card.Title>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <Card.Actions className="justify-end">
                        <Button color="primary">Buy Now</Button>
                    </Card.Actions>
                </Card.Body>
            </Card>
        </div>
    );
}
