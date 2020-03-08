import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-words',
    templateUrl: './words.component.html',
    styleUrls: ['./words.component.scss']
})
export class WordsComponent implements OnInit {
    arrWords = [
        {id: 1, en: 'action', vn: 'hành động', memorized: true},
        {id: 2, en: 'actor', vn: 'diễn viên', memorized: false},
        {id: 3, en: 'activity', vn: 'hoạt động', memorized: true},
        {id: 4, en: 'active', vn: 'chủ động', memorized: true},
        {id: 5, en: 'bath', vn: 'tắm', memorized: false},
        {id: 6, en: 'bedroom', vn: 'phòng ngủ', memorized: true}
    ];
    newEn = '';
    newVn = '';
    toggle = true;
    filterStatus = "VIEW_ALL";

    constructor() {
    }

    ngOnInit(): void {
    }
    addWord() {
        this.arrWords.unshift({
            id: this.arrWords.length + 1,
            en: this.newEn,
            vn: this.newVn,
            memorized: false
        });
        this.newEn = '';
        this.newVn = '';
        this.toggle = true;
    }
    onToggle() {
        this.toggle = !this.toggle;
    }
    removeWord(id: number) {
        const index = this.arrWords.findIndex(e => e.id === id);
        this.arrWords.splice(index, 1);
    }
    getShowStatus(memorized: boolean) {
        const viewAll = this.filterStatus === 'VIEW_ALL';
        const viewMemorized = this.filterStatus === 'VIEW_MEMORIZED' && memorized;
        const viewNotMemorize = this.filterStatus === 'VIEW_NOT_MEMORIZE' && !memorized;
        return viewAll || viewMemorized || viewNotMemorize;
    }
    showFollowLabel(memorized: boolean) {
        if( this.filterStatus === 'VIEW_ALL' ||
            this.filterStatus === 'VIEW_MEMORIZED' && memorized ||
            this.filterStatus === 'VIEW_NOT_MEMORIZE' && !memorized) {
          return true;
        }
    }
}
