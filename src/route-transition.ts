import { animate, animateChild, group, query, style, transition, trigger } from "@angular/animations";

export const routeTransition = trigger('routeTransition', [
    transition('* <=> *', [
        // style({ position: 'relative' }),
        // query(':enter, :leave', [
        //   style({
        //     position: 'absolute',
        //     top: '340px',
        //     left: 0,
        //     width: '100%'
        //   })
        // ], { optional: true }),
        // query(':enter', [
        //   style({ left: '-100%' })
        // ], { optional: true }),
        // query(':leave', animateChild(), { optional: true }),
        // group([
        //   query(':leave', [
        //     animate('0.3s linear', style({ left: '100%', opacity: '0' }))
        //   ], { optional: true }),
        //   query(':enter', [
        //     animate('0.3s linear', style({ left: '0%', opacity: '1' }))
        //   ], { optional: true }),
        //   query('@*', animateChild(), { optional: true })
        // ]),
      ])
    ]);