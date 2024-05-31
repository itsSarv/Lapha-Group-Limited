'use state'
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import React from "react";

const card = (props) => {
  return(
        <Card shadow="sm" key={props.item} isPressable onPress={() => console.log("item pressed")}>
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={props.item.productName}
              className="w-full object-cover h-[140px]"
              src={props.item.img}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{props.item.productName}</b>
            <p className="text-default-500">${props.item.price}</p>
          </CardFooter>
       </Card>
  )
}

export default card