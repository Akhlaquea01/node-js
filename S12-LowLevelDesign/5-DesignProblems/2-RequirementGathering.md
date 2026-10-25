### Requirements
1. Can there be multiple floor: Yes
2. Should support multiple entry / exit gates: No
3. EV spots: No
4. Auto spot assignment: Yes
    Algo for spot assignemnt:
5. Type of Billing: Yes, hourly, weekly, monthly, VIP
    - Peak pricing, weekend Pricing
6. Open 24*7: Yes
7. Support Maintainence: Yes (Spot, floor, parking lot)
8. Workers: 0
9. SoS: No
10. Parked in wrong spot: No
11. Valet Parking: No
12. Vehicle types: 2W/3W/4W/6W/8W 
13. Capacity: 500
14. Disability / Reserve: No
15. Data Lifecycle: 1 month
16. Prebooking: No
17. Automate reading car's number: yes
18. Payment Methods: Yes
20. Should it support analytics? No
21. Ticket: Handover physical ticket 
21. Display: 
    - Display at the main gate
    - Display can also be at floors
22. Restrictions: No, assuming people are sane


### Entities
1. ParkingLot
2. Vehicle
3. ParkingSpot
4. Display
5. Ticket
6. EntryGate
7. ExitGate
8. Billing / PaymentProcessor
9. ParkingFloor
10. SpotAssignment