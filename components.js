export const tripLeg = (legOrder) => {
  const keys = [
    [`Addtl_Stop${legOrder}_Address_1`, `leg${legOrder}_Address`],
    [`Addtl_Stop${legOrder}_Address_2`, `leg${legOrder}_Address2`],
    [`Addtl_Stop${legOrder}_City`, `leg${legOrder}_City`],
    [`Addtl_Stop${legOrder}_State`, `leg${legOrder}_State`],
    [`Addtl_Stop${legOrder}_Postal_Code`, `leg${legOrder}_Zip`],
  ];

  const [adress1, address2, city, state, zip] = keys;

  return {
    property: keys,
    component: `<div>
            <h6 
            class="card-subtitle mb-2 pt-2 pb-2 text-body-secondary"
            style="display: inline-block">
              Stop #${legOrder}
            </h6>
            <button
                  type="button"
                  class="btn-close"
                  id="closeBtn-${legOrder}"
                  onClick="addtlStopClose(this.id, ${legOrder})"
                  aria-label="Close"
                  style="float: right"
                ></button>
          </div>
            <div class="row g-3">
              <!-- do address -->
              <div class="col-12">
                <label for="${adress1[1]}" class="form-label">Address</label>
                <input
                  name="stop${legOrder}-address"
                  type="text"
                  class="form-control"
                  id="${adress1[1]}"
                  placeholder="e.g. 1234 Main St"
                  autocomplete="stop${legOrder} address-line1"
                />
              </div>
              <div class="col-12">
                <label for="${address2[1]}" class="form-label">Address 2</label>
                <input
                  name="stop${legOrder}-address-ln2"
                  type="text"
                  class="form-control"
                  id="${address2[1]}"
                  placeholder="e.g. floor 1 etc."
                  autocomplete="stop${legOrder} address-line2"
                />
              </div>
              <div class="col-md-6">
                <label for="${city[1]}" class="form-label">City</label>
                <input
                  name="stop${legOrder}-city"
                  type="text"
                  class="form-control"
                  id="${city[1]}"
                  autocomplete="stop${legOrder} address-level2"
                />
              </div>
              <div class="col-md-2">
                <label for="${state[1]}" class="form-label">State</label>
                <input
                  name="stop${legOrder}-state"
                  id="${state[1]}"
                  class="form-control"
                  autocomplete="stop${legOrder} address-level1"
                />
              </div>
              <div class="col-md-3">
                <label for="${zip[1]}" class="form-label">Zip</label>
                <input
                  name="stop${legOrder}-zip"
                  type="text"
                  class="form-control"
                  id="${zip[1]}"
                  autocomplete="stop${legOrder} postal-code"
                />
              </div>
              <!-- do end -->
            </div>`,
  };
};

export const roundTripOpt = `
              <select class="form-select name="round_trip" op-time" id="rt_t">
                <option selected>Will Call</option>
              </select>
              <label for="rt_t">Return Time</label>`;

export const commentsIns = `
            <textarea
                class="form-control"
                name="comments"
                placeholder="Leave a comment here"
                id="comment"
                style="height: 100px"
              ></textarea>
              <label for="comment">Comments</label>
            `;
