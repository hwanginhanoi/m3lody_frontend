<script setup lang="ts">
const items = [
  {
    Name: "BOT",
    ItemID: "33",
    Price: "$42,298.37 ",
    From: "0xf18A...6e4f",
    To: "0x2Fec...Fx4",
    Date: "30/1/2024, 14:55:10 PM",
  },
  {
    Name: "Ether",
    ItemID: "22",
    Price: "$313,42 ",
    From: "0xf18A...d34f",
    To: "0x2Fec...Fx4",
    Date: "30/1/2024, 14:33:10 PM",
  },
  {
    Name: "VN",
    ItemID: "01",
    Price: "$21,22",
    From: "0x9F8A...6x7f",
    To: "0x2FiF...Fx4E",
    Date: "29/1/2024, 14:33:10 PM",
  },
  {
    Name: "EUR",
    ItemID: "27",
    Price: "$33,123 ",
    From: "0xf9A...6E4f",
    To: "0x2FEc...Fx4",
    Date: "29/1/2024, 11:35:10 AM",
  },
  {
    Name: "WS3",
    ItemID: "12",
    Price: "$132,32",
    From: "0xf78A...6xO4",
    To: "0x2F4c...F38X",
    Date: "28/1/2024, 8:33:10 AM",
  },
  {
    Name: "EXE",
    ItemID: "21",
    Price: "$21 ",
    From: "0xf28A...6dif",
    To: "0X73ec...Fx4E",
    Date: "28/1/2024, 7:21:10 AM",
  },
];

let header = [
    {
        title: 'Name',
        key: 'name',
        align: 'center'
    },
    {title: 'ID', key: 'id', align: 'center'},
    {title: 'Price', key: 'price', align: 'center'},
    {title: 'From', key: 'from', align: 'center'},
    {title: 'To', key: 'to', align: 'center'},
    {title: 'Date', key: 'date', align: 'center'},
]

</script>
<template>
    <v-main
      :style="{ background: $vuetify.theme.global.current.colors.background }"
    >
    <h1 style="margin-left: 63px; margin-top: 50px;"> Transaction </h1>
      <v-container style="margin-bottom: 160px">
        <v-row align="end">
        <v-spacer></v-spacer>
          <v-col cols="auto">
            <v-btn
              prepend-icon=" mdi-pencil"
              color="blue-grey"
              block
              rounded-lg="xl"
              >Report</v-btn
            >
          </v-col>
          <v-col cols="auto">
            <v-btn
              prepend-icon="mdi-plus"
              color="success"
              block
              rounded-lg="xl"
              >NFT LIST</v-btn
            >
          </v-col>
        </v-row>
<v-card>
          <v-data-table
                :headers="header"
                :items="items"
                :items-per-page="5"
                class="elevation-1"
                :fixed-header="true"
                :hide-default-footer="true"
            >
                <template v-slot:item.name="{item}">
                    {{item.Name}}
                </template>
                <template v-slot:item.id="{item}">
                    {{item.ItemID}}
                </template>
              <template v-slot:item.price="{item}">
                    {{item.Price}}
                </template>
              <template v-slot:item.from="{item}">
                    {{item.From}}
                </template>
              <template v-slot:item.to="{item}">
                    {{item.To}}
                </template>
              <template v-slot:item.date="{item}">
                    {{item.Date}}
                </template>
            </v-data-table>
</v-card>
      </v-container>
    </v-main>
</template>