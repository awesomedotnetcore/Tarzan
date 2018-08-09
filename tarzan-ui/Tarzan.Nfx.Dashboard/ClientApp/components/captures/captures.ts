import Vue from 'vue';
import { Component } from 'vue-property-decorator';


import { Capture } from '../../api/models';

@Component
export default class CapturesComponent extends Vue {
    dataSource: Capture[] = [];
    currentPage: number = 1;
    totalCaptures: number = 0;
    perPage = 10;
    loading = true;

    mounted() {
        fetch('api/captures/count').then(response => response.text().then(value => this.totalCaptures = parseInt(value)));
        this.reload(1);
    }
    reload(page: number) {
        this.loading = true;
        let offset = (page - 1) * this.perPage;
        let fetchString = `api/captures/range/${offset}/count/${this.perPage}`;
        console.log(fetchString);
        fetch(fetchString)
            .then(response => response.json() as Promise<Capture[]>)
            .then(data => {
                this.dataSource = data;
                this.loading = false;
            });
    }
}
