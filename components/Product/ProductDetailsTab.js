import React from 'react';
import { Tab, Table, Icon, Button, Form } from 'semantic-ui-react';

const ProductDetailsTab = ({ description }) => {
  return (
    <Tab
      panes={[
        {
          menuItem: 'Description',
          render: () => (
            <Tab.Pane>
              <div className='products-details-tab-content'>
                <p>{description}</p>
              </div>
            </Tab.Pane>
          ),
        },
        {
          menuItem: 'Additional Information',
          render: () => (
            <Tab.Pane>
              <div className='products-details-tab-content'>
                <Table singleLine>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>Color:</Table.Cell>
                      <Table.Cell>Varies By Intention</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                      <Table.Cell>Size:</Table.Cell>
                      <Table.Cell>Varies By Ego</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                      <Table.Cell>Material:</Table.Cell>
                      <Table.Cell>Organic</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                      <Table.Cell>Dreams:</Table.Cell>
                      <Table.Cell>Lucid</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                      <Table.Cell>Connection:</Table.Cell>
                      <Table.Cell>BioEnergetic</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                      <Table.Cell>LifeStyle:</Table.Cell>
                      <Table.Cell>Holistic</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                      <Table.Cell>Perspective:</Table.Cell>
                      <Table.Cell>Grounded</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                      <Table.Cell>Shipping:</Table.Cell>
                      <Table.Cell>Free</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </div>
            </Tab.Pane>
          ),
        },
        {
          menuItem: ' Shipping',
          render: () => (
            <Tab.Pane>
              <div className='products-details-tab-content'>
                <Table singleLine>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>Shipping</Table.Cell>
                      <Table.Cell>This item Ships to USA</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                      <Table.Cell>Delivery</Table.Cell>
                      <Table.Cell>
                        Typically 48-72 hours after payment
                      </Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </div>
            </Tab.Pane>
          ),
        },
        {
          menuItem: 'Why Work With Us',
          render: () => (
            <Tab.Pane>
              <div className='products-details-tab-content'>
                <p>What makes the products at Grounded HLC special?</p>
                <ul>
                  <li>
                    I've been trained by the best: Paul Check, Elliot Hulse and
                    Tantric Energetics- I bring their collective knowledge to
                    each interaction.
                  </li>
                  <li>
                    I bring a unique and powerful set of tools to help guide
                    your process- I do not inject my values into your life.
                  </li>
                  <li>
                    I provide a coaching experience that addresses all areas of
                    a life: physical, emotional and spiritual.
                  </li>
                  <li>
                    A grounded perspective is rooted in personal responsibility.
                  </li>
                  <li>You decide when to make your life better.</li>
                </ul>
              </div>
            </Tab.Pane>
          ),
        },
        {
          menuItem: 'Reviews',
          render: () => (
            <Tab.Pane>
              <div className='products-details-tab-content'>
                <div className='products-review-form'>
                  <h3>Customer Reviews</h3>
                  <div className='review-title'>
                    <div className='rating'>
                      <Icon name='star' />
                      <Icon name='star' />
                      <Icon name='star' />
                      <Icon name='star' />
                      <Icon name='star' />
                    </div>
                    <p>Based on 3 reviews</p>

                    <a className='default-btn' href='#'>
                      Write a Review
                    </a>
                  </div>

                  <div className='review-comments'>
                    <div className='review-item'>
                      <div className='rating'>
                        <Icon name='star' />
                        <Icon name='star' />
                        <Icon name='star' />
                        <Icon name='star' />
                        <Icon name='star' />
                      </div>
                      <h3>Good</h3>
                      <span>
                        <strong>Admin</strong> on <strong>Sep 21, 2019</strong>
                      </span>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation.
                      </p>
                    </div>

                    <div className='review-item'>
                      <div className='rating'>
                        <Icon name='star' />
                        <Icon name='star' />
                        <Icon name='star' />
                        <Icon name='star' />
                      </div>
                      <h3>Good</h3>
                      <span>
                        <strong>Admin</strong> on <strong>Sep 21, 2019</strong>
                      </span>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation.
                      </p>
                    </div>

                    <div className='review-item'>
                      <div className='rating'>
                        <Icon name='star' />
                        <Icon name='star' />
                        <Icon name='star' />
                        <Icon name='star' />
                      </div>

                      <h3>Good</h3>
                      <span>
                        <strong>Admin</strong> on <strong>Sep 21, 2019</strong>
                      </span>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation.
                      </p>
                    </div>
                  </div>

                  <div className='review-form'>
                    <h3>Write a Review</h3>
                    <Form>
                      <div className='row'>
                        <div className='col-6'>
                          <Form.Field>
                            <input
                              type='text'
                              id='name'
                              name='name'
                              placeholder='Enter your name'
                              className='form-control'
                            />
                          </Form.Field>
                        </div>

                        <div className='col-6'>
                          <Form.Field>
                            <input
                              type='email'
                              id='email'
                              name='email'
                              placeholder='Enter your email'
                              className='form-control'
                            />
                          </Form.Field>
                        </div>
                      </div>

                      <Form.Field>
                        <input
                          type='text'
                          id='review-title'
                          name='review-title'
                          placeholder='Enter your review a title'
                          className='form-control'
                        />
                      </Form.Field>

                      <Form.Field>
                        <textarea
                          name='review-body'
                          id='review-body'
                          rows='6'
                          placeholder='Write your comments here'
                          className='form-control'
                        />
                      </Form.Field>

                      <Button type='submit' className='default-btn'>
                        Submit Review
                      </Button>
                    </Form>
                  </div>
                </div>
              </div>
            </Tab.Pane>
          ),
        },
      ]}
      className='products-details-tab'
    />
  );
};

export default ProductDetailsTab;
