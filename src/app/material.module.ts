import { NgModule } from '@angular/core';
import { MatButtonModule, MatDividerModule, MatExpansionModule } from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatDividerModule,
        MatExpansionModule
    ],
    exports: [
        MatButtonModule,
        MatDividerModule,
        MatExpansionModule
    ]
})
export class AppMaterialModule {}
