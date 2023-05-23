'use client';
import styles from './page.module.css';
import {BsCart3} from 'react-icons/bs';
import React from 'react';
import * as Popover from '@radix-ui/react-popover';

export default function Cart(){
  return(
    <div className={styles.cart}>
      <Popover.Root>
        <Popover.Anchor asChild>
          <div className="Row">
            <Popover.Trigger><BsCart3 size={24}/></Popover.Trigger>
          </div>
        </Popover.Anchor>
        <Popover.Portal>
          <Popover.Content className={styles.PopoverContent}>
            <h2>Navarro</h2>
            <p>100,50</p>
            <h2>Navarro</h2>
            <p>100,50</p>
            <h2>Navarro</h2>
            <p>100,50</p>
            <h2>Navarro</h2>
            <p>100,50</p>
            <p>-------------</p>
            <h2>Subtotal</h2>
            <p>1000,00</p>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  );
}
