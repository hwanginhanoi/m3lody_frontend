<script setup lang="ts">
const statistics = [
    {
        title: 'Sales',
        stats: '245k',
        icon: 'ri-pie-chart-2-line',
        color: 'primary',
    },
    {
        title: 'Customers',
        stats: '12.5k',
        icon: 'ri-group-line',
        color: 'success',
    },
    {
        title: 'Product',
        stats: '1.54k',
        icon: 'ri-macbook-line',
        color: 'warning',
    },
    {
        title: 'Revenue',
        stats: '$88k',
        icon: 'ri-money-dollar-circle-line',
        color: 'info',
    },
]
</script>

<template>
    <v-card title="Transactions">
        <template #subtitle>
            <p class="text-body-1 mb-0">
                <span class="d-inline-block font-weight-medium text-high-emphasis">Total 48.5% Growth</span> <span class="text-high-emphasis">😎</span> this month
            </p>
        </template>

        <template #append>
            <v-btn class="mt-n5">
                <v-icon
                    color="high-emphasis"
                    icon="mdi-language-ts"
                />
            </v-btn>
        </template>

        <v-card-text class="pt-10">
            <v-row>
                <v-col
                    v-for="item in statistics"
                    :key="item.title"
                    cols="12"
                    sm="6"
                    md="3"
                >
                    <div class="d-flex align-center gap-x-3">
                        <v-avatar
                            :color="item.color"
                            rounded
                            size="40"
                            class="elevation-2"
                        >
                            <v-icon
                                size="24"
                                :icon="item.icon"
                            />
                        </v-avatar>

                        <div class="d-flex flex-column">
                            <div class="text-body-1">
                                {{ item.title }}
                            </div>
                            <h5 class="text-h5">
                                {{ item.stats }}
                            </h5>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>
