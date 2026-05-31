// SUGGESTION 3: Separate Data Concerns
export const multiRootData = [
  // --- FIRST STARTING BOX ---
  {
    color: "brown",
    initialPosition: [0, 0, 0],
    targetPosition: [0, 0, 2.4],
    move: true,
    speed: 1.5,
    children: [
      {
        targetPosition: [-1.2, 0, 1.2],
        color: "brown",
        move: false,
        speed: 1,
        children: [
          {
            targetPosition: [2.36, 0, 0],
            color: "brown",
            move: false,
            speed: 1,
            children: [
              {
                targetPosition: [-1.2, 0, 0],
                color: "brown",
                move: false,
                speed: 1,
                children: [
                  {
                    targetPosition: [0, 1.2, 0],
                    color: "brown",
                    move: false,
                    speed: 1,
                    children: [
                      {
                        targetPosition: [-1.2, 0, 1.2],
                        color: "brown",
                        move: false,
                        speed: 2,
                        children: [
                          {
                            targetPosition: [0, -1.2, 0],
                            color: "brown",
                            move: false,
                            speed: 2,
                            children: [],
                          },
                          {
                            targetPosition: [0, 0, -2.36],
                            color: "brown",
                            move: false,
                            speed: 2,
                            children: [
                              {
                                targetPosition: [0, -1.2, 0],
                                color: "brown",
                                move: false,
                                speed: 2,
                                children: [],
                              },
                              {
                                targetPosition: [2.36, 0, 0],
                                color: "brown",
                                move: false,
                                speed: 2,
                                children: [
                                  {
                                    targetPosition: [0, -1.2, 0],
                                    color: "brown",
                                    move: false,
                                    speed: 2,
                                    children: [],
                                  },
                                  {
                                    targetPosition: [0, 0, 2.36],
                                    color: "brown",
                                    move: false,
                                    speed: 2,
                                    children: [
                                      {
                                        targetPosition: [0, -1.2, 0],
                                        color: "brown",
                                        move: false,
                                        speed: 2,
                                        children: [],
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        targetPosition: [0, 0, 1.2],
                        color: "brown",
                        move: false,
                        speed: 0.3,
                        children: [],
                      },
                      {
                        targetPosition: [0, 0, -1.2],
                        color: "brown",
                        move: false,
                        speed: 0.3,
                        children: [],
                      },
                      {
                        targetPosition: [1.2, 0, 0],
                        color: "brown",
                        move: false,
                        speed: 0.3,
                        children: [],
                      },
                      {
                        targetPosition: [-1.2, 0, 0],
                        color: "brown",
                        move: false,
                        speed: 0.3,
                        children: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  // --- SECOND STARTING BOX ---
  {
    initialPosition: [0, 0, 0],
    color: "brown",
    targetPosition: [0, 0, 2.4],
    move: false,
    speed: 1,
  },
];