import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ShoppingListService} from '../shopping-list.service';

@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html',
    styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
    @ViewChild('nameInput') nameInputRef: ElementRef;
    @ViewChild('amountInput') amountInputRef: ElementRef;

    constructor(private service: ShoppingListService) {
    }

    ngOnInit() {
    }

    onAddItem() {
        this.service.addIngredient(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value);
    }

}
